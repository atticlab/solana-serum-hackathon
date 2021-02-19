import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {transfer} from "./utils/instructions";
import {connection, TOKEN_PROGRAM_ID} from "./utils/constants";

export async function transferTokens(
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
