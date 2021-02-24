import * as BufferLayout from '@hvrlk/buffer-layout';
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';

export const connection = new solanaWeb3.Connection('https://devnet.solana.com');

export const OWNER_ACCOUNT = new solanaWeb3.Account(Buffer.from([
    184,
    234,
    94,
    108,
    74,
    201,
    179,
    86,
    173,
    136,
    230,
    45,
    12,
    108,
    66,
    181,
    77,
    14,
    211,
    111,
    58,
    168,
    52,
    107,
    214,
    173,
    83,
    53,
    61,
    158,
    61,
    118,
    55,
    203,
    30,
    99,
    89,
    70,
    138,
    32,
    202,
    42,
    222,
    88,
    93,
    51,
    242,
    193,
    94,
    51,
    43,
    225,
    255,
    106,
    36,
    30,
    93,
    224,
    10,
    118,
    117,
    123,
    43,
    221,
]));

export const TOKEN_PROGRAM_ID = new solanaWeb3.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');
export const CONTRACT_PROGRAM_ID = new solanaWeb3.PublicKey('CR8CRris6RDN8RHw4ANgt7rPTs771kGSu4vNgk76WGJ2');

export const SAVINGS_MINT = new solanaWeb3.PublicKey('JLzcay8TWyWnyZPfGsgn6UhvJa7Nk7Ch45odKyykbXx');
export const POOL_ACCOUNT = new solanaWeb3.PublicKey('B8em5p29s9mpGVgpgtNCvFkofbzv7RRGK7MCCSfqmCsw');

export const ACCOUNT_LAYOUT = BufferLayout.struct([
    BufferLayout.blob(32, 'mint'),
    BufferLayout.blob(32, 'owner'),
    BufferLayout.nu64('amount'),
    BufferLayout.blob(93),
]);

export const POOL_LAYOUT = BufferLayout.struct([
    BufferLayout.u8('version'),
    BufferLayout.u8('bump_seed'),
    BufferLayout.blob(32, 'token_program_id'),
    BufferLayout.blob(32, 'savings_account'),
    BufferLayout.blob(32, 'savings_mint'),
    BufferLayout.blob(32, 'pool_mint'),
    BufferLayout.blob(32, 'owner'),
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
LAYOUT.addVariant(4, BufferLayout.struct([BufferLayout.nu64('amount')]), 'approve');
LAYOUT.addVariant(7, BufferLayout.struct([BufferLayout.nu64('amount')]), 'mintTo');
LAYOUT.addVariant(8, BufferLayout.struct([BufferLayout.nu64('amount')]), 'burn');
LAYOUT.addVariant(9, BufferLayout.struct([]), 'closeAccount');

export const instructionMaxSpan = Math.max(...Object.values(LAYOUT.registry).map((r) => r.span));

export function encodeTokenInstructionData(instruction) {
    const b = Buffer.alloc(instructionMaxSpan);
    const span = LAYOUT.encode(instruction, b);
    return b.slice(0, span);
}

const CONTRACT_LAYOUT = BufferLayout.union(BufferLayout.u8('instruction'));
CONTRACT_LAYOUT.addVariant(1, BufferLayout.struct([BufferLayout.nu64('amount')]), 'deposit');
CONTRACT_LAYOUT.addVariant(2, BufferLayout.struct([BufferLayout.nu64('amount')]), 'withdraw');

export const contractInstructionMaxSpan = Math.max(...Object.values(LAYOUT.registry).map((r) => r.span));

export function encodeContractInstructionData(instruction) {
    const b = Buffer.alloc(contractInstructionMaxSpan);
    const span = CONTRACT_LAYOUT.encode(instruction, b);
    return b.slice(0, span);
}
