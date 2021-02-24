import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {ACCOUNT_LAYOUT, connection, OWNER_ACCOUNT, SAVINGS_MINT, TOKEN_PROGRAM_ID} from "./utils/constants";
import {initializeAccountInstruction} from "./utils/instructions";
import {getPullData} from "./pool";

export async function createAndInitializeTokenAccount(
    payer: solanaWeb3.Account,
    mintPublicKey: solanaWeb3.PublicKey,
    newAccount: solanaWeb3.Account,
): Promise<string> {
    const transaction = new solanaWeb3.Transaction();

    const lamportsForAccount = await connection.getMinimumBalanceForRentExemption(
        ACCOUNT_LAYOUT.span,
    );

    transaction.add(
        solanaWeb3.SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: newAccount.publicKey,
            lamports: lamportsForAccount,
            space: ACCOUNT_LAYOUT.span,
            programId: TOKEN_PROGRAM_ID,
        }),
    );

    transaction.add(
        initializeAccountInstruction(
            newAccount.publicKey,
            mintPublicKey,
            payer.publicKey,
        ),
    );

    return await solanaWeb3.sendAndConfirmTransaction(
        connection,
        transaction,
        [payer, newAccount],
        {
            preflightCommitment: 'single',
        }
    )
};

export async function createTokenAccount(): Promise<solanaWeb3.PublicKey> {
    const newAccount = new solanaWeb3.Account();
    await createAndInitializeTokenAccount(OWNER_ACCOUNT, SAVINGS_MINT, newAccount);
    return newAccount.publicKey;
}

export async function createPoolTokenAccount(): Promise<solanaWeb3.PublicKey> {
    const newAccount = new solanaWeb3.Account();
    const mintPublicKey = (await getPullData()).poolMint;
    await createAndInitializeTokenAccount(OWNER_ACCOUNT, mintPublicKey, newAccount);
    return newAccount.publicKey;
}
