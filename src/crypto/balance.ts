import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {ACCOUNT_LAYOUT} from "./utils/constants";
import {connection} from "./utils/constants";

export function parseTokenAccountData(
    data: Buffer,
): {
    mint: solanaWeb3.PublicKey;
    owner: solanaWeb3.PublicKey;
    amount: number;
} {
    const { mint, owner, amount } = ACCOUNT_LAYOUT.decode(data);

    return {
        mint: new solanaWeb3.PublicKey(mint),
        owner: new solanaWeb3.PublicKey(owner),
        amount,
    };
}

export async function getBalance(publicKey: solanaWeb3.PublicKey): Promise<number> {
    const accountInfo = await connection.getAccountInfo(publicKey);
    return parseTokenAccountData(accountInfo.data).amount;
}
