import {ACCOUNT_LAYOUT, TOKEN_PROGRAM_ID} from "./utils/constants";
import {initializeAccountInstruction} from "./utils/instructions";

const solanaWeb3 = require('@pragma-technologies/react-native-solana');

export async function createAndInitializeTokenAccount(
    connection: solanaWeb3.Connection,
    payer: solanaWeb3.Account,
    mintPublicKey: solanaWeb3.PublicKey,
    newAccount: solanaWeb3.Account,
) {
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
