import './global';
import React from 'react';
import 'react-native-get-random-values';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const solanaWeb3 = require('@hvrlk/solana');
import * as BufferLayout from 'buffer-layout';

const TOKEN_PROGRAM_ID = new solanaWeb3.PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA');

// const MEMO_PROGRAM_ID = new solanaWeb3.PublicKey('Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo');
//
// const MINT_LAYOUT = BufferLayout.struct([
//   BufferLayout.blob(44),
//   BufferLayout.u8('decimals'),
//   BufferLayout.blob(37),
// ]);

const ACCOUNT_LAYOUT = BufferLayout.struct([
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

const instructionMaxSpan = Math.max(...Object.values(LAYOUT.registry).map((r) => r.span));

function encodeTokenInstructionData(instruction) {
  const b = Buffer.alloc(instructionMaxSpan);
  const span = LAYOUT.encode(instruction, b);
  return b.slice(0, span);
}

async function testWeb3() {
  const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);
  const account = new solanaWeb3.Account(secret);
  console.log('ACCOUNT: ', account.publicKey.toString());
  const connection = new solanaWeb3.Connection('https://devnet.solana.com');

  const accountData = await connection.getAccountInfo(account.publicKey);
  console.log('ACCOUNT DATA: ', accountData);

  const balance = await connection.getBalance(account.publicKey, 'max');
  console.log('BALANCE: ', balance);

  const lamportsForAccount = await connection.getMinimumBalanceForRentExemption(ACCOUNT_LAYOUT.span);
  console.log('BALANCE FOR RENT: ', lamportsForAccount);

  const transaction = new solanaWeb3.Transaction();

  const newAccount = new solanaWeb3.Account();
  console.log('NEW ACCOUNT PK: ', newAccount.publicKey);

  transaction.add(
      solanaWeb3.SystemProgram.createAccount({
        fromPubkey: account.publicKey,
        newAccountPubkey: newAccount.publicKey,
        lamports: lamportsForAccount,
        space: ACCOUNT_LAYOUT.span,
        programId: new solanaWeb3.PublicKey(account.publicKey),
      }),
  );

  const keys = [
    { pubkey: newAccount.publicKey, isSigner: false, isWritable: true },
    { pubkey: '3gJBsGKXS4cxW6DYqT3EnDfzshuWQ1QMrqMAUxgCsDKi', isSigner: false, isWritable: false },
    { pubkey: account.publicKey, isSigner: false, isWritable: false },
    { pubkey: solanaWeb3.SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false },
  ];

  const initializeAccountInstruction = new solanaWeb3.TransactionInstruction({
    keys,
    data: encodeTokenInstructionData({
      initializeAccount: {},
    }),
    programId: new solanaWeb3.PublicKey(account.publicKey),
  });

  transaction.add(initializeAccountInstruction);

  return await solanaWeb3.sendAndConfirmTransaction(
      connection,
      transaction,
      [account, newAccount],
      {
        preflightCommitment: 'single',
      },
  );
}

const App: () => React$Node = () => {
  testWeb3()
      .then(result => console.log(result))
      .catch(error => console.log(error));


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
