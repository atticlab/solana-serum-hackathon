import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {BN} from 'bn.js';
import {
  transferInstruction,
  approveInstruction,
  depositInstruction,
} from './utils/instructions';
import {
  connection,
  POOL_ACCOUNT,
  SAVINGS_MINT,
  TOKEN_PROGRAM_ID,
} from './utils/constants';

export async function transferTokens(
  ownerAccount: solanaWeb3.Account,
  sourcePublicKey: solanaWeb3.PublicKey,
  destPublicKey: solanaWeb3.PublicKey,
  authorityKey: solanaWeb3.PublicKey,
  savingsPublicKey: solanaWeb3.PublicKey,
  depositPublicKey: solanaWeb3.PublicKey,
  poolMint: solanaWeb3.PublicKey,
  amount: BN,
  amountToDeposit: BN,
) {
  const destAccountInfo = await connection.getAccountInfo(destPublicKey);

  if (!destAccountInfo?.owner.equals(TOKEN_PROGRAM_ID)) {
    throw new Error('Not a token account');
  }

  const transaction = new solanaWeb3.Transaction();

  transaction.add(
    transferInstruction(
      sourcePublicKey,
      destPublicKey,
      ownerAccount.publicKey,
      amount,
    ),
  );

  transaction.add(
    approveInstruction(
      sourcePublicKey,
      authorityKey,
      ownerAccount.publicKey,
      amountToDeposit,
    ),
  );

  transaction.add(
    depositInstruction(
      POOL_ACCOUNT,
      authorityKey,
      sourcePublicKey,
      savingsPublicKey,
      SAVINGS_MINT,
      depositPublicKey,
      poolMint,
      amountToDeposit,
    ),
  );

  return await solanaWeb3.sendAndConfirmTransaction(
    connection,
    transaction,
    [ownerAccount],
    {
      preflightCommitment: 'single',
    },
  );
}
