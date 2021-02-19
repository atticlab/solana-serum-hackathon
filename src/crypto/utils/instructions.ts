import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {CONTRACT_PROGRAM_ID, encodeTokenInstructionData, TOKEN_PROGRAM_ID} from "./constants";

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

export function transferInstruction(
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

export function approveInstruction(
    source: solanaWeb3.PublicKey,
    delegate: solanaWeb3.PublicKey,
    owner: solanaWeb3.PublicKey,
    amount: number,
) {
    const keys = [
        { pubkey: source, isSigner: false, isWritable: true },
        { pubkey: delegate, isSigner: false, isWritable: false },
        { pubkey: owner, isSigner: true, isWritable: false },
    ];

    return new solanaWeb3.TransactionInstruction({
        keys,
        data: encodeTokenInstructionData({
            approve: { amount },
        }),
        programId: TOKEN_PROGRAM_ID,
    });
}

export function depositInstruction(
    savingsPool: solanaWeb3.PublicKey,
    savingsPoolAuthority: solanaWeb3.PublicKey,
    sourceTokenAccount: solanaWeb3.PublicKey,
    destinationTokenAccount: solanaWeb3.PublicKey,
    savingsMint: solanaWeb3.PublicKey,
    poolTokenAccount: solanaWeb3.PublicKey,
    poolMint: solanaWeb3.PublicKey,
    amount: number,
) {
    const keys = [
        { pubkey: savingsPool, isSigner: false, isWritable: true },
        { pubkey: savingsPoolAuthority, isSigner: false, isWritable: false },
        { pubkey: sourceTokenAccount, isSigner: false, isWritable: true },
        { pubkey: destinationTokenAccount, isSigner: false, isWritable: true },
        { pubkey: savingsMint, isSigner: false, isWritable: false },
        { pubkey: poolTokenAccount, isSigner: false, isWritable: true },
        { pubkey: poolMint, isSigner: false, isWritable: true },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false }
    ];

    return new solanaWeb3.TransactionInstruction({
        keys,
        data: encodeTokenInstructionData({
            deposit: { amount },
        }),
        programId: CONTRACT_PROGRAM_ID,
    });
}

export function withdrawInstruction(
    savingsPool: solanaWeb3.PublicKey,
    savingsPoolAuthority: solanaWeb3.PublicKey,
    sourcePoolToken: solanaWeb3.PublicKey,
    poolMint: solanaWeb3.PublicKey,
    source: solanaWeb3.PublicKey,
    destination: solanaWeb3.PublicKey,
    savingsMint: solanaWeb3.PublicKey,
    amount: number,
) {
    const keys = [
        { pubkey: savingsPool, isSigner: false, isWritable: true },
        { pubkey: savingsPoolAuthority, isSigner: false, isWritable: false },
        { pubkey: sourcePoolToken, isSigner: false, isWritable: true },
        { pubkey: poolMint, isSigner: false, isWritable: true },
        { pubkey: source, isSigner: false, isWritable: true },
        { pubkey: destination, isSigner: false, isWritable: true },
        { pubkey: savingsMint, isSigner: false, isWritable: true },
        { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false }
    ];

    return new solanaWeb3.TransactionInstruction({
        keys,
        data: encodeTokenInstructionData({
            withdraw: { amount },
        }),
        programId: CONTRACT_PROGRAM_ID,
    });
}
