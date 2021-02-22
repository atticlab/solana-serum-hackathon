import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {connection, CONTRACT_PROGRAM_ID, POOL_ACCOUNT, POOL_LAYOUT} from "./utils/constants";
import crypto from 'react-native-crypto'

const BN = require('bn.js');
const buffer = require('buffer');

function parsePullAccountData(
    data: Buffer,
): {
    poolMint: solanaWeb3.PublicKey;
    savingsMint: solanaWeb3.PublicKey;
    savings: solanaWeb3.PublicKey;
    nonce: number
} {
    const { savings_account, pool_mint, savings_mint, bump_seed } = POOL_LAYOUT.decode(data);

    return {
        savings: new solanaWeb3.PublicKey(savings_account),
        poolMint: new solanaWeb3.PublicKey(pool_mint),
        savingsMint: new solanaWeb3.PublicKey(savings_mint),
        nonce: bump_seed
    };
}

export async function getPullData(): Promise<{
    savings: solanaWeb3.PublicKey,
    poolMint: solanaWeb3.PublicKey,
    nonce: number
}> {
    const accountInfo = await connection.getAccountInfo(POOL_ACCOUNT);
    const { savings, poolMint, nonce } = parsePullAccountData(accountInfo.data)
    return {
        savings,
        poolMint,
        nonce
    };
}

export async function createAuthority(
    nonce: number,
): Promise<solanaWeb3.PublicKey> {
    let buf = Buffer.allocUnsafe(1);
    buf.writeUInt8(nonce);

    const seeds = [POOL_ACCOUNT.toBuffer(), buf]
    let buffer$1 = buffer.Buffer.alloc(0);
    seeds.forEach(function (seed) {
        if (seed.length > 32) {
            throw new Error(`Max seed length exceeded`);
        }

        buffer$1 = buffer.Buffer.concat([buffer$1, buffer.Buffer.from(seed)]);
    });
    buffer$1 = buffer.Buffer.concat([buffer$1, CONTRACT_PROGRAM_ID.toBuffer(), buffer.Buffer.from('ProgramDerivedAddress')]);
    let hash = crypto.createHash('sha256').update(new Uint8Array(buffer$1)).digest('hex');
    let publicKeyBytes = new BN(hash, 16).toArray(null, 32);

    return new solanaWeb3.PublicKey(publicKeyBytes);
}
