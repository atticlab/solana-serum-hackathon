#![cfg(feature = "test-bpf")]

use savings_contract::*;
use solana_program::{hash::Hash, pubkey::Pubkey, system_instruction, 
    program_pack::{IsInitialized, Pack}};
use solana_program_test::*;
use solana_sdk::{
    account::Account,
    signature::{Keypair, Signer},
    transaction::Transaction,
    transport::TransportError,
};

pub fn program_test() -> ProgramTest {
    ProgramTest::new("savings", id(), processor!(processor::process_instruction))
}

const DECIMALS: u8 = 9;
const TOTAL_TOKEN_AMOUNT: u64 = 1000000000000000;

struct TestAccounts {
    savings_pool: Keypair,
    pool_authority: Pubkey,
    bump_seed: u8,
    pool_owner: Keypair,
    user_owner: Keypair, 
    savings_mint: Keypair,
    savings_user_account: Keypair,
    savings_account: Keypair,
    pool_mint: Keypair,
}

async fn setup() -> (BanksClient, Keypair, Hash, TestAccounts) {
    let (mut banks_client, payer, recent_blockhash) = program_test().start().await;

    let savings_pool = Keypair::new();
    let pool_owner = Keypair::new();
    let savings_account = Keypair::new();
    let pool_mint = Keypair::new();
    let user_owner = Keypair::new();

    let (pool_authority, bump_seed) = processor::find_authority_bump_seed(&id(), &savings_pool.pubkey());

    // Account for the pool
    create_account(
        &mut banks_client,
        &payer,
        &recent_blockhash,
        &savings_pool,
        state::Pool::LEN,
        &id(),
    )
    .await
    .unwrap();
    // Account for the savings mint
    let (savings_mint, savings_user_account) = create_init_mint_and_mint(&mut banks_client,
        &payer,
        &recent_blockhash, &user_owner.pubkey()).await.unwrap();
    // Account for the pool mint
    create_account(
        &mut banks_client,
        &payer,
        &recent_blockhash,
        &pool_mint,
        token::Mint::LEN,
        &token::id(),
    )
    .await
    .unwrap();
    // Account for the savings account
    create_account(
        &mut banks_client,
        &payer,
        &recent_blockhash,
        &savings_account,
        token::Account::LEN,
        &token::id(),
    )
    .await
    .unwrap();

    (
        banks_client,
        payer,
        recent_blockhash,
        TestAccounts {
            savings_pool,
            pool_authority,
            bump_seed,
            user_owner,
            pool_owner,
            savings_mint,
            savings_user_account,
            savings_account,
            pool_mint,
        }
    )
}

async fn create_init_mint_and_mint(
    banks_client: &mut BanksClient,
    payer: &Keypair,
    recent_blockhash: &Hash,
    user_owner: &Pubkey,
) -> Result<(Keypair, Keypair), TransportError> {

    let savings_mint = Keypair::new();
    let savings_user_account = Keypair::new();

    create_account(banks_client, payer, recent_blockhash, &savings_mint, token::Mint::LEN, &token::id()).await.unwrap();
    create_account(banks_client, payer, recent_blockhash, &savings_user_account, token::Account::LEN, &token::id()).await.unwrap();

    let mut transaction = Transaction::new_with_payer(
        &[crate::token::initialize_mint(
            &token::id(),
            &savings_mint.pubkey(),
            &payer.pubkey(),
            None,
            DECIMALS,
        ).unwrap(),
        crate::token::initialize_account(
            &token::id(),
            &savings_user_account.pubkey(),
            &savings_mint.pubkey(),
            &user_owner,
        ).unwrap(),
        crate::token::mint_to(
            &token::id(),
            &savings_mint.pubkey(),
            &savings_user_account.pubkey(),
            &payer.pubkey(),
            &[],
            TOTAL_TOKEN_AMOUNT,
        ).unwrap()],
        Some(&payer.pubkey()),
    );
    transaction.sign(&[payer], *recent_blockhash);
    banks_client.process_transaction(transaction).await?;

    Ok((savings_mint, savings_user_account))
}

async fn create_init_token_account(
    banks_client: &mut BanksClient,
    payer: &Keypair,
    recent_blockhash: &Hash,
    mint: &Pubkey,
) -> Result<Keypair, TransportError> {

    let token_account = Keypair::new();

    create_account(banks_client, payer, recent_blockhash, &token_account, token::Account::LEN, &token::id()).await.unwrap();

    let mut transaction = Transaction::new_with_payer(
        &[crate::token::initialize_account(
            &token::id(),
            &token_account.pubkey(),
            &mint,
            &payer.pubkey(),
        ).unwrap()],
        Some(&payer.pubkey()),
    );
    transaction.sign(&[payer], *recent_blockhash);
    banks_client.process_transaction(transaction).await?;

    Ok(token_account)
}

async fn create_account(
    banks_client: &mut BanksClient,
    payer: &Keypair,
    recent_blockhash: &Hash,
    account: &Keypair,
    struct_size: usize,
    program_id: &Pubkey,
) -> Result<(), TransportError> {
    let rent = banks_client.get_rent().await.unwrap();
    let account_rent = rent.minimum_balance(struct_size);

    let mut transaction = Transaction::new_with_payer(
        &[system_instruction::create_account(
            &payer.pubkey(),
            &account.pubkey(),
            account_rent,
            struct_size as u64,
            program_id,
        )],
        Some(&payer.pubkey()),
    );
    transaction.sign(&[payer, account], *recent_blockhash);
    banks_client.process_transaction(transaction).await?;
    Ok(())
}

async fn get_account(banks_client: &mut BanksClient, pubkey: &Pubkey) -> Account {
    banks_client
        .get_account(*pubkey)
        .await
        .expect("account not found")
        .expect("account empty")
}

async fn pool_initialize(
    banks_client: &mut BanksClient,
    payer: &Keypair,
    recent_blockhash: &Hash,
    test_accounts: &TestAccounts,
) -> Result<(), TransportError> {
    let mut transaction = Transaction::new_with_payer(
        &[instruction::initialize(&id(), 
            &test_accounts.savings_pool.pubkey(), 
            &test_accounts.pool_authority, 
            &test_accounts.pool_owner.pubkey(), 
            &test_accounts.pool_mint.pubkey(), 
            &test_accounts.savings_mint.pubkey(), 
            &test_accounts.savings_account.pubkey(), 
            &token::id()).unwrap()],
        Some(&payer.pubkey()),
    );
    transaction.sign(&[payer, &test_accounts.pool_owner], *recent_blockhash);
    banks_client.process_transaction(transaction).await?;
    Ok(())
}

async fn token_approve_and_pool_deposit(
    banks_client: &mut BanksClient,
    payer: &Keypair,
    recent_blockhash: &Hash,
    test_accounts: &TestAccounts,
    pool_user_account: &Pubkey, 
    amount: u64,
) -> Result<(), TransportError> {
    let mut transaction = Transaction::new_with_payer(
        &[crate::token::approve(
            &token::id(),
            &test_accounts.savings_user_account.pubkey(),
            &test_accounts.pool_authority,
            &test_accounts.user_owner.pubkey(),
            &[],
            amount,
        ).unwrap(),
        instruction::deposit(
            &id(), 
            &test_accounts.savings_pool.pubkey(), 
            &test_accounts.pool_authority, 
            &test_accounts.savings_user_account.pubkey(), 
            &test_accounts.savings_account.pubkey(), 
            &test_accounts.savings_mint.pubkey(), 
            &pool_user_account, 
            &test_accounts.pool_mint.pubkey(), 
            &token::id(),
            amount
        ).unwrap()],
        Some(&payer.pubkey()),
    );
    transaction.sign(&[payer, &test_accounts.user_owner], *recent_blockhash);
    banks_client.process_transaction(transaction).await?;
    Ok(())
}

#[tokio::test]
async fn initialize() {
    let (mut banks_client, payer, recent_blockhash, test_accounts) = setup().await;

    pool_initialize(&mut banks_client,
        &payer,
        &recent_blockhash,
        &test_accounts,
    )
    .await
    .unwrap();

    let pool_account = get_account(&mut banks_client, &test_accounts.savings_pool.pubkey()).await;

    let pool_data =
        state::Pool::unpack_from_slice(&pool_account.data.as_slice()).unwrap();

    assert!(pool_data.is_initialized());
    assert_eq!(pool_data.owner, test_accounts.pool_owner.pubkey());
    assert_eq!(pool_data.bump_seed, test_accounts.bump_seed);
}

#[tokio::test]
async fn deposit() {
    let (mut banks_client, payer, recent_blockhash, test_accounts) = setup().await;

    pool_initialize(&mut banks_client,
        &payer,
        &recent_blockhash,
        &test_accounts,)
    .await
    .unwrap();

    // Deposit
    let deposit_amount = TOTAL_TOKEN_AMOUNT / 10;
    let user_pool_token_account = create_init_token_account(&mut banks_client,
        &payer,
        &recent_blockhash,
        &test_accounts.pool_mint.pubkey()).await.unwrap();

    token_approve_and_pool_deposit(&mut banks_client,
        &payer,
        &recent_blockhash,
        &test_accounts, &user_pool_token_account.pubkey(), deposit_amount)
    .await
    .unwrap();
}

#[tokio::test]
async fn withdraw() {
    let (mut banks_client, payer, recent_blockhash, test_accounts) = setup().await;

    pool_initialize(&mut banks_client,
        &payer,
        &recent_blockhash,
        &test_accounts,)
    .await
    .unwrap();

    // TODO: Withdraw

}

