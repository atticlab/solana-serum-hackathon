import * as BufferLayout from '@hvrlk/buffer-layout';
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';

export const connection = new solanaWeb3.Connection('https://devnet.solana.com');

export const TOKEN_PROGRAM_ID = new solanaWeb3.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');

export const ACCOUNT_LAYOUT = BufferLayout.struct([
    BufferLayout.blob(32, 'mint'),
    BufferLayout.blob(32, 'owner'),
    BufferLayout.nu64('amount'),
    BufferLayout.blob(93),
]);


const LAYOUT = BufferLayout.union(BufferLayout.u8('instruction'));
LAYOUT.addVariant(
    0,
    BufferLayout.struct([
        BufferLayout.u8('decimals'),
        BufferLayout.blob(32, 'mintAuthority'),
        BufferLayout.u8('freezeAuthorityOption'),
        BufferLayout.blob(32, 'freezeAuthority'),
    ]),
    'initializeMint',
);
LAYOUT.addVariant(1, BufferLayout.struct([]), 'initializeAccount');
LAYOUT.addVariant(3, BufferLayout.struct([BufferLayout.nu64('amount')]), 'transfer');
LAYOUT.addVariant(7, BufferLayout.struct([BufferLayout.nu64('amount')]), 'mintTo');
LAYOUT.addVariant(8, BufferLayout.struct([BufferLayout.nu64('amount')]), 'burn');
LAYOUT.addVariant(9, BufferLayout.struct([]), 'closeAccount');

export const instructionMaxSpan = Math.max(...Object.values(LAYOUT.registry).map((r) => r.span));

export function encodeTokenInstructionData(instruction) {
    const b = Buffer.alloc(instructionMaxSpan);
    const span = LAYOUT.encode(instruction, b);
    return b.slice(0, span);
}
