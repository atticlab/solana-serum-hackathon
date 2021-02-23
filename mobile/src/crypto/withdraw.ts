import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {approveInstruction, withdrawInstruction} from "./utils/instructions";
import {connection, POOL_ACCOUNT, SAVINGS_MINT} from "./utils/constants";
import {BN} from 'bn.js';

export async function withdrawTokens(
    ownerAccount: solanaWeb3.Account,
    depositPublicKey: solanaWeb3.PublicKey,
    authorityKey: solanaWeb3.PublicKey,
    savingsPublicKey: solanaWeb3.PublicKey,
    sourcePublicKey: solanaWeb3.PublicKey,
    poolMint: solanaWeb3.PublicKey,
    amount: BN,
) {

    const transaction = new solanaWeb3.Transaction()

    transaction.add(
        approveInstruction(
            depositPublicKey,
            authorityKey,
            ownerAccount.publicKey,
            amount
        )
    )

    transaction.add(
        withdrawInstruction(
            POOL_ACCOUNT,
            authorityKey,
            depositPublicKey,
            poolMint,
            savingsPublicKey,
            sourcePublicKey,
            SAVINGS_MINT,
            amount
        )
    )

    return await solanaWeb3.sendAndConfirmTransaction(
        connection,
        transaction,
        [ownerAccount],
        {
            preflightCommitment: 'single',
        }
    )
}
