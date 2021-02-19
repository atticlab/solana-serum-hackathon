import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {encodeTokenInstructionData, TOKEN_PROGRAM_ID} from "./constants";

export function initializeAccountInstruction(
    account: solanaWeb3.PublicKey,
    mint: solanaWeb3.PublicKey,
    owner: solanaWeb3.PublicKey,
) {
    const keys = [
        { pubkey: account, isSigner: false, isWritable: true },
        { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: owner, isSigner: false, isWritable: false },
        { pubkey: solanaWeb3.SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
    ];

    return new solanaWeb3.TransactionInstruction({
        keys,
        data: encodeTokenInstructionData({
            initializeAccount: {},
        }),
        programId: TOKEN_PROGRAM_ID,
    });
}

export function transfer(
    source: solanaWeb3.PublicKey,
    destination: solanaWeb3.PublicKey,
    owner: solanaWeb3.PublicKey,
    amount: number,
) {
    const keys = [
        { pubkey: source, isSigner: false, isWritable: true },
        { pubkey: destination, isSigner: false, isWritable: true },
        { pubkey: owner, isSigner: true, isWritable: false },
    ];

    return new solanaWeb3.TransactionInstruction({
        keys,
        data: encodeTokenInstructionData({
            transfer: { amount },
        }),
        programId: TOKEN_PROGRAM_ID,
    });
}
