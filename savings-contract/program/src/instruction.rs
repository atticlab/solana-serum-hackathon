//! Instruction types

use solana_program::instruction::AccountMeta;
use solana_program::instruction::Instruction;
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use solana_program::sysvar;
use std::mem::size_of;

/// Instructions supported by the StakePool program.
#[repr(C)]
#[derive(Clone, Debug, PartialEq)]
pub enum SavingsInstruction {
    ///   Initializes a new Savings Pool.
    ///
    ///   0. `[w]` Uninitialized Savings Pool account
    ///   1. `[]` Pool authority (find_program_address)
    ///   2. `[s]` Owner
    ///   3. `[w]` Uninitialized mint for Savings Pool tokens
    ///   4. `[]` Existing mint for tokens received by this pool
    ///   5. `[w]` Uninitialized token account to collect savings
    ///   6. `[]` Rent sysvar
    ///   7. `[]` Token program id
    Initialize,

    ///   Deposit some tokens into the pool.  The output is a "pool" token representing ownership
    ///   into the pool.
    ///
    ///   0. `[w]` Savings Pool
    ///   1. `[]` Savings Pool authority
    ///   2. `[w]` Token account to deposit tokens from
    ///   3. `[w]` Savings token account to deposit to
    ///   4. `[]` Savings token mint
    ///   5. `[w]` User token account to receive Pool token
    ///   6. `[w]` Pool token mint account
    ///   7. `[]` Token program id
    ///   userdata: amount to deposit
    Deposit(u64),

    ///   Withdraw the token from the pool at the current ratio. Parameter is amount of pool tokens to burn
    ///
    ///   0. `[w]` Savings Pool
    ///   1. `[]` Savings Pool authority
    ///   2. `[w]` User token account to burn Pool token from
    ///   3. `[w]` Pool token mint account
    ///   4. `[w]` Savings account to withdraw from
    ///   5. `[w]` User token account to withdraw to
    ///   6. `[]` Savings token mint
    ///   7. `[]` Token program id
    ///   userdata: amount to burn
    Withdraw(u64),
}

impl SavingsInstruction {
    /// Restore instruction fro byte array
    pub fn deserialize(input: &[u8]) -> Result<Self, ProgramError> {
        if input.len() < size_of::<u8>() {
            return Err(ProgramError::InvalidAccountData);
        }
        Ok(match input[0] {
            0 => Self::Initialize,
            1 => {
                let val: &u64 = unpack(input)?;
                Self::Deposit(*val)
            }
            2 => {
                let val: &u64 = unpack(input)?;
                Self::Withdraw(*val)
            }
            _ => return Err(ProgramError::InvalidAccountData),
        })
    }

    /// Serialize instruction
    pub fn serialize(&self) -> Result<Vec<u8>, ProgramError> {
        let mut output = vec![0u8; size_of::<SavingsInstruction>()];
        match self {
            Self::Initialize => {
                output[0] = 0;
            }
            Self::Deposit(val) => {
                output[0] = 1;
                #[allow(clippy::cast_ptr_alignment)]
                let value = unsafe { &mut *(&mut output[1] as *mut u8 as *mut u64) };
                *value = *val;
            }
            Self::Withdraw(val) => {
                output[0] = 2;
                #[allow(clippy::cast_ptr_alignment)]
                let value = unsafe { &mut *(&mut output[1] as *mut u8 as *mut u64) };
                *value = *val;
            }
        }
        Ok(output)
    }
}

/// Unpacks a reference from a bytes buffer.
pub fn unpack<T>(input: &[u8]) -> Result<&T, ProgramError> {
    if input.len() < size_of::<u8>() + size_of::<T>() {
        return Err(ProgramError::InvalidAccountData);
    }
    #[allow(clippy::cast_ptr_alignment)]
    let val: &T = unsafe { &*(&input[1] as *const u8 as *const T) };
    Ok(val)
}

/// Creates 'Initialize' instruction.
pub fn initialize(
    program_id: &Pubkey,
    savings_pool: &Pubkey,
    authority: &Pubkey,
    owner: &Pubkey,
    pool_mint: &Pubkey,
    savings_mint: &Pubkey,
    savings_account: &Pubkey,
    token_program_id: &Pubkey,
) -> Result<Instruction, ProgramError> {
    let init_data = SavingsInstruction::Initialize;
    let data = init_data.serialize()?;
    let accounts = vec![
        AccountMeta::new(*savings_pool, false),
        AccountMeta::new_readonly(*authority, false),
        AccountMeta::new_readonly(*owner, true),
        AccountMeta::new(*pool_mint, false),
        AccountMeta::new_readonly(*savings_mint, false),
        AccountMeta::new(*savings_account, false),
        AccountMeta::new_readonly(sysvar::rent::id(), false),
        AccountMeta::new_readonly(*token_program_id, false),
    ];
    Ok(Instruction {
        program_id: *program_id,
        accounts,
        data,
    })
}

/// Creates 'Deposit' instruction.
pub fn deposit(
    program_id: &Pubkey,
    savings_pool: &Pubkey,
    pool_authority: &Pubkey,
    from_account: &Pubkey,
    savings_account: &Pubkey,
    savings_mint: &Pubkey,
    mint_to: &Pubkey,
    pool_mint: &Pubkey,
    token_program_id: &Pubkey,
    amount: u64,
) -> Result<Instruction, ProgramError> {
    let args = SavingsInstruction::Deposit(amount);
    let data = args.serialize()?;
    let accounts = vec![
        AccountMeta::new_readonly(*savings_pool, false),
        AccountMeta::new_readonly(*pool_authority, false),
        AccountMeta::new(*from_account, false),
        AccountMeta::new(*savings_account, false),
        AccountMeta::new_readonly(*savings_mint, false),
        AccountMeta::new(*mint_to, false),
        AccountMeta::new(*pool_mint, false),
        AccountMeta::new_readonly(*token_program_id, false),
    ];
    Ok(Instruction {
        program_id: *program_id,
        accounts,
        data,
    })
}

/// Creates 'Withdraw' instruction.
pub fn withdraw(
    program_id: &Pubkey,
    savings_pool: &Pubkey,
    pool_authority: &Pubkey,
    burn_from: &Pubkey,
    pool_mint: &Pubkey,
    savings_account: &Pubkey,
    to_account: &Pubkey,
    savings_mint: &Pubkey,
    token_program_id: &Pubkey,
    amount: u64,
) -> Result<Instruction, ProgramError> {
    let args = SavingsInstruction::Withdraw(amount);
    let data = args.serialize()?;
    let accounts = vec![
        AccountMeta::new_readonly(*savings_pool, false),
        AccountMeta::new_readonly(*pool_authority, false),
        AccountMeta::new(*burn_from, false),
        AccountMeta::new(*pool_mint, false),
        AccountMeta::new(*savings_account, false),
        AccountMeta::new(*to_account, false),
        AccountMeta::new_readonly(*savings_mint, false),
        AccountMeta::new_readonly(*token_program_id, false),
    ];
    Ok(Instruction {
        program_id: *program_id,
        accounts,
        data,
    })
}
