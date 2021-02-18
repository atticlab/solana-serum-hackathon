import {transfer} from "./utils/instructions";
import {TOKEN_PROGRAM_ID} from "./utils/constants";

const solanaWeb3 = require('@pragma-technologies/react-native-solana');

export async function transferTokens(
    connection: solanaWeb3.Connection,
    ownerAccount: solanaWeb3.Account,
    sourcePublicKey: solanaWeb3.PublicKey,
    destPublicKey: solanaWeb3.PublicKey,
    amount: number,
) {
    const destAccountInfo = await connection.getAccountInfo(destPublicKey);

    if (!destAccountInfo?.owner.equals(TOKEN_PROGRAM_ID)) {
        throw new Error('Not a token account');
    }

    const transaction = new solanaWeb3.Transaction().add(
        transfer(
            sourcePublicKey,
            destPublicKey,
            ownerAccount.publicKey,
            amount,
        ),
    );

    return await solanaWeb3.sendAndConfirmTransaction(
        connection,
        transaction,
        [ownerAccount],
        {
            preflightCommitment: 'single',
        }
    )
}
