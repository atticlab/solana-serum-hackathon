import * as solanaWeb3 from "@pragma-technologies/react-native-solana";
import {createAuthority, getPullData} from "./crypto/pool";
import {createAndInitializeTokenAccount} from "./crypto/account";
import {SAVINGS_MINT} from "./crypto/utils/constants";
import {transferTokens} from "./crypto/transfer";
import {withdrawTokens} from "./crypto/withdraw";

// Account

export async function testCreateTokenAccount(): Promise<solanaWeb3.PublicKey> {
    const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);

    const account = new solanaWeb3.Account(secret);

    const newAccount = new solanaWeb3.Account();

    return await createAndInitializeTokenAccount(account, SAVINGS_MINT, newAccount);
}

export async function testCreatePoolTokenAccount(): Promise<solanaWeb3.PublicKey> {
    const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);

    const account = new solanaWeb3.Account(secret);

    const newAccount = new solanaWeb3.Account();

    // pull data should be requested and stored after first launch
    const mintPublicKey = (await getPullData()).poolMint;

    return await createAndInitializeTokenAccount(account, mintPublicKey, newAccount);
}

// Authority

export async function testCreateAuthority() {
    const nonce = (await getPullData()).nonce;
    return await createAuthority(nonce);
}

// Transfer

export async function testTransferTokens() {
    const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);
    // const secret = Buffer.from([12,66,39,208,30,134,222,70,133,220,111,204,182,176,174,17,190,133,165,65,141,36,137,200,11,206,151,23,139,193,234,25,87,55,192,214,33,175,182,93,13,99,116,111,154,183,74,60,67,204,120,217,99,168,209,155,198,63,102,54,195,211,31,14]);
    const account = new solanaWeb3.Account(secret);

    const sourcePublicKey = new solanaWeb3.PublicKey('HxkvUmLEzHnddbMqJmU6xYf8UqBrpVbJqgKzYEv7g28r');
    const destinationPublicKey = new solanaWeb3.PublicKey('B46odqFyjd3vr6WRGrHCdSFVJ3g82vz7r61Bjbf7AoKA');

    const depositTokenPublicKey = new solanaWeb3.PublicKey('2rFuPBhMT8jaEZJA3E2dxwQDU9LRXEY771bhhjZcTAef');

    // const sourcePublicKey = new solanaWeb3.PublicKey('EhNLhAik6LAwxizPv5MTiJLrZRXQr7psHjuxsimhmYyF');
    // const destinationPublicKey = new solanaWeb3.PublicKey('B46odqFyjd3vr6WRGrHCdSFVJ3g82vz7r61Bjbf7AoKA');

    const poolData = await getPullData();
    const authority = await createAuthority(poolData.nonce);

    return await transferTokens(
        account,
        sourcePublicKey,
        destinationPublicKey,
        authority,
        poolData.savings,
        depositTokenPublicKey,
        poolData.poolMint,
        1000,
        5
    )
}

// Withdraw

export async function testWithdraw() {
    const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);
    const account = new solanaWeb3.Account(secret);

    const sourcePublicKey = new solanaWeb3.PublicKey('HxkvUmLEzHnddbMqJmU6xYf8UqBrpVbJqgKzYEv7g28r');

    const depositTokenPublicKey = new solanaWeb3.PublicKey('2rFuPBhMT8jaEZJA3E2dxwQDU9LRXEY771bhhjZcTAef');

    const poolData = await getPullData();
    const authority = await createAuthority(poolData.nonce);

    return await withdrawTokens(
        account,
        depositTokenPublicKey,
        authority,
        poolData.savings,
        sourcePublicKey,
        poolData.poolMint,
        2
    )
}
