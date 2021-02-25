//! Program state processor

use crate::instruction::SavingsInstruction;
use crate::state::CURRENT_VERSION;
//use num_traits::FromPrimitive;
use crate::state::Pool;
use crate::token::{Account as TokenAccount, Mint as TokenMint};
use solana_program::{
    account_info::next_account_info, account_info::AccountInfo, entrypoint::ProgramResult, msg,
    program::invoke_signed, program::invoke, program_error::ProgramError, program_pack::IsInitialized,
    program_pack::Pack, pubkey::Pubkey, rent::Rent, sysvar::Sysvar,
};

/// Calculates the authority id by generating a program address.
pub fn authority_id(
    program_id: &Pubkey,
    pool: &Pubkey,
    bump_seed: u8,
) -> Result<Pubkey, ProgramError> {
    Pubkey::create_program_address(&[&pool.to_bytes()[..32], &[bump_seed]], program_id)
        .map_err(|_| ProgramError::InvalidArgument)
}

/// Generates seed bump for stake pool authorities
pub fn find_authority_bump_seed(program_id: &Pubkey, pool: &Pubkey) -> (Pubkey, u8) {
    Pubkey::find_program_address(&[&pool.to_bytes()[..32]], program_id)
}

/// Issue a mint initialization instruction.
pub fn token_mint_initialize<'a>(
    token_program: AccountInfo<'a>,
    mint: AccountInfo<'a>,
    mint_authority: AccountInfo<'a>,
    rent: AccountInfo<'a>,
    decimals: u8,
) -> Result<(), ProgramError> {
    let ix = crate::token::initialize_mint(
        token_program.key,
        mint.key,
        mint_authority.key,
        None,
        decimals,
    )?;

    invoke(&ix, &[mint, rent, token_program])
}

/// Issue an accont initialization instruction.
pub fn token_account_initialize<'a>(
    token_program: AccountInfo<'a>,
    account: AccountInfo<'a>,
    mint: AccountInfo<'a>,
    authority: AccountInfo<'a>,
    rent: AccountInfo<'a>,
) -> Result<(), ProgramError> {
    let ix =
        crate::token::initialize_account(token_program.key, account.key, mint.key, authority.key)?;

    invoke(&ix, &[account, mint, authority, rent, token_program])
}

/// Issue a token mint instruction.
pub fn token_mint_to<'a>(
    pool: &Pubkey,
    token_program: AccountInfo<'a>,
    mint: AccountInfo<'a>,
    to_account: AccountInfo<'a>,
    authority: AccountInfo<'a>,
    bump_seed: u8,
    amount: u64,
) -> Result<(), ProgramError> {
    let authority_signature_seeds = [&pool.to_bytes()[..32], &[bump_seed]];
    let signers = &[&authority_signature_seeds[..]];

    let ix = crate::token::mint_to(
        token_program.key,
        mint.key,
        to_account.key,
        authority.key,
        &[],
        amount,
    )?;

    invoke_signed(&ix, &[mint, to_account, authority, token_program], signers)
}

/// Issue a token burn instruction.
pub fn token_burn<'a>(
    pool: &Pubkey,
    token_program: AccountInfo<'a>,
    burn_account: AccountInfo<'a>,
    mint: AccountInfo<'a>,
    authority: AccountInfo<'a>,
    bump_seed: u8,
    amount: u64,
) -> Result<(), ProgramError> {
    let authority_signature_seeds = [&pool.to_bytes()[..32], &[bump_seed]];
    let signers = &[&authority_signature_seeds[..]];

    let ix =crate::token::burn(
        token_program.key,
        burn_account.key,
        mint.key,
        authority.key,
        &[],
        amount,
    )?;

    invoke_signed(
        &ix,
        &[burn_account, mint, authority, token_program],
        signers,
    )
}

/// Issue a token transfer instruction.
pub fn token_transfer<'a>(
    pool: &Pubkey,
    token_program: AccountInfo<'a>,
    from_account: AccountInfo<'a>,
    to_account: AccountInfo<'a>,
    authority: AccountInfo<'a>,
    bump_seed: u8,
    amount: u64,
) -> Result<(), ProgramError> {
    let authority_signature_seeds = [&pool.to_bytes()[..32], &[bump_seed]];
    let signers = &[&authority_signature_seeds[..]];

    let ix = crate::token::transfer(
        token_program.key,
        from_account.key,
        to_account.key,
        authority.key,
        &[],
        amount,
    )?;

    invoke_signed(
        &ix,
        &[from_account, to_account, authority, token_program],
        signers,
    )
}

/// Initialize the pool
pub fn process_initialize(program_id: &Pubkey, accounts: &[AccountInfo]) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let savings_pool_info = next_account_info(account_info_iter)?;
    let authority_info = next_account_info(account_info_iter)?;
    let owner_info = next_account_info(account_info_iter)?;
    let pool_mint_info = next_account_info(account_info_iter)?;
    let savings_mint_info = next_account_info(account_info_iter)?;
    let savings_account_info = next_account_info(account_info_iter)?;
    // Rent sysvar account
    let rent_info = next_account_info(account_info_iter)?;
    let rent = &Rent::from_account_info(rent_info)?;
    // Token program ID
    let token_program_info = next_account_info(account_info_iter)?;

    // Check if transaction was signed by owner
    if !owner_info.is_signer {
        return Err(ProgramError::MissingRequiredSignature);
    }

    let mut pool = Pool::unpack_from_slice(&savings_pool_info.data.borrow())?;
    // Savings pool account should not be already initialized
    if pool.is_initialized() {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    let pool_mint = TokenMint::unpack_from_slice(&pool_mint_info.data.borrow())?;
    if pool_mint.is_initialized() {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    let savings_mint = TokenMint::unpack_from_slice(&savings_mint_info.data.borrow())?;
    if !savings_mint.is_initialized() {
        return Err(ProgramError::UninitializedAccount);
    }

    let savings_account = TokenAccount::unpack_from_slice(&savings_account_info.data.borrow())?;
    if savings_account.is_initialized() {
        return Err(ProgramError::AccountAlreadyInitialized);
    }

    // Check if accounts are rent-exempt
    for account in &[savings_pool_info, pool_mint_info, savings_account_info] {
        if !rent.is_exempt(account.lamports(), account.data_len()) {
            return Err(ProgramError::InsufficientFunds);
        }
    }

    // Calculate authority address
    let (authority, bump_seed) = find_authority_bump_seed(program_id, &savings_pool_info.key);
    if authority != *authority_info.key {
        return Err(ProgramError::InvalidArgument);
    }

    // Initialize mint
    token_mint_initialize(
        token_program_info.clone(),
        pool_mint_info.clone(),
        authority_info.clone(),
        rent_info.clone(),
        savings_mint.decimals,
    )?;

    // Initialize token account
    token_account_initialize(
        token_program_info.clone(),
        savings_account_info.clone(),
        savings_mint_info.clone(),
        authority_info.clone(),
        rent_info.clone(),
    )?;

    // Save pool state
    pool.version = CURRENT_VERSION;
    pool.bump_seed = bump_seed;
    pool.token_program_id = *token_program_info.key;
    pool.savings_account = *savings_account_info.key;
    pool.savings_mint = *savings_mint_info.key;
    pool.pool_mint = *pool_mint_info.key;
    pool.owner = *owner_info.key;

    pool.pack_into_slice(&mut savings_pool_info.data.borrow_mut());

    Ok(())
}

/// Deposit into the pool
pub fn process_deposit(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    amount: u64,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let savings_pool_info = next_account_info(account_info_iter)?;
    let authority_info = next_account_info(account_info_iter)?;
    let from_account_info = next_account_info(account_info_iter)?;
    let savings_account_info = next_account_info(account_info_iter)?;
    let savings_mint_info = next_account_info(account_info_iter)?;
    let pool_token_account_info = next_account_info(account_info_iter)?;
    let pool_mint_info = next_account_info(account_info_iter)?;
    let token_program_info = next_account_info(account_info_iter)?;

    let pool = Pool::unpack_from_slice(&savings_pool_info.data.borrow())?;
    // Savings pool account should be initialized
    if !pool.is_initialized() {
        return Err(ProgramError::UninitializedAccount);
    }

    // Check authority
    let authority = authority_id(program_id, savings_pool_info.key, pool.bump_seed)?;
    if authority != *authority_info.key {
        return Err(ProgramError::InvalidArgument);
    }

    // Check acconts
    if pool.savings_mint != *savings_mint_info.key
        || pool.savings_account != *savings_account_info.key
        || pool.pool_mint != *pool_mint_info.key
        || pool.token_program_id != *token_program_info.key
    {
        return Err(ProgramError::InvalidArgument);
    }

    // Transfer savings tokens from the user
    token_transfer(
        savings_pool_info.key, 
        token_program_info.clone(), 
        from_account_info.clone(), 
        savings_account_info.clone(),
        authority_info.clone(), 
        pool.bump_seed,
        amount
    )?;
    
    // Mint pool tokens to the user
    token_mint_to(
        savings_pool_info.key,
        token_program_info.clone(),
        pool_mint_info.clone(),
        pool_token_account_info.clone(),
        authority_info.clone(),
        pool.bump_seed,
        amount,
    )?;

    Ok(())
}

/// Withdraw from the pool
pub fn process_withdraw(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    amount: u64,
) -> ProgramResult {
    let account_info_iter = &mut accounts.iter();
    let savings_pool_info = next_account_info(account_info_iter)?;
    let authority_info = next_account_info(account_info_iter)?;
    let burn_account_info = next_account_info(account_info_iter)?;
    let pool_mint_info = next_account_info(account_info_iter)?;
    let savings_account_info = next_account_info(account_info_iter)?;
    let to_account_info = next_account_info(account_info_iter)?;
    let savings_mint_info = next_account_info(account_info_iter)?;
    let token_program_info = next_account_info(account_info_iter)?;

    let pool = Pool::unpack_from_slice(&savings_pool_info.data.borrow())?;
    // Savings pool account should be initialized
    if !pool.is_initialized() {
        return Err(ProgramError::UninitializedAccount);
    }

    // Check authority
    let authority = authority_id(program_id, savings_pool_info.key, pool.bump_seed)?;
    if authority != *authority_info.key {
        return Err(ProgramError::InvalidArgument);
    }

    // Check acconts
    if pool.savings_mint != *savings_mint_info.key
        || pool.savings_account != *savings_account_info.key
        || pool.pool_mint != *pool_mint_info.key
        || pool.token_program_id != *token_program_info.key
    {
        return Err(ProgramError::InvalidArgument);
    }

    // Burn pool tokens from the user
    token_burn(
        savings_pool_info.key,
        token_program_info.clone(),
        burn_account_info.clone(),
        pool_mint_info.clone(),
        authority_info.clone(),
        pool.bump_seed,
        amount,
    )?;

    // Transfer savings tokens to the user
    token_transfer(savings_pool_info.key, 
        token_program_info.clone(), 
        savings_account_info.clone(),
        to_account_info.clone(), 
        authority_info.clone(), 
        pool.bump_seed,
        amount)?;

    Ok(())
}

/// Processes an instruction
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    input: &[u8],
) -> ProgramResult {
    let instruction = SavingsInstruction::deserialize(input)?;
    match instruction {
        SavingsInstruction::Initialize => {
            msg!("Instruction: Initialize");
            process_initialize(program_id, accounts)
        }
        SavingsInstruction::Deposit(amount) => {
            msg!("Instruction: Deposit");
            process_deposit(program_id, accounts, amount)
        }
        SavingsInstruction::Withdraw(amount) => {
            msg!("Instruction: Withdraw");
            process_withdraw(program_id, accounts, amount)
        }
    }
}
