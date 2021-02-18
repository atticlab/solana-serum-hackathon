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
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {createAndInitializeTokenAccount} from "./src/crypto/account";
import {transferTokens} from "./src/crypto/transfer";


async function testCreateAndInitializeTokenAccount() {
  // const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);
  const secret = Buffer.from([12,66,39,208,30,134,222,70,133,220,111,204,182,176,174,17,190,133,165,65,141,36,137,200,11,206,151,23,139,193,234,25,87,55,192,214,33,175,182,93,13,99,116,111,154,183,74,60,67,204,120,217,99,168,209,155,198,63,102,54,195,211,31,14]);

  const account = new solanaWeb3.Account(secret);

  const newAccount = new solanaWeb3.Account();
  const mintPublicKey = new solanaWeb3.PublicKey('JLzcay8TWyWnyZPfGsgn6UhvJa7Nk7Ch45odKyykbXx');

  return await createAndInitializeTokenAccount(account, mintPublicKey, newAccount);
}

async function testTransferTokens() {
  const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);
  // const secret = Buffer.from([12,66,39,208,30,134,222,70,133,220,111,204,182,176,174,17,190,133,165,65,141,36,137,200,11,206,151,23,139,193,234,25,87,55,192,214,33,175,182,93,13,99,116,111,154,183,74,60,67,204,120,217,99,168,209,155,198,63,102,54,195,211,31,14]);
  const account = new solanaWeb3.Account(secret);

  const sourcePublicKey = new solanaWeb3.PublicKey('HxkvUmLEzHnddbMqJmU6xYf8UqBrpVbJqgKzYEv7g28r');
  const destinationPublicKey = new solanaWeb3.PublicKey('B46odqFyjd3vr6WRGrHCdSFVJ3g82vz7r61Bjbf7AoKA');

  // const sourcePublicKey = new solanaWeb3.PublicKey('EhNLhAik6LAwxizPv5MTiJLrZRXQr7psHjuxsimhmYyF');
  // const destinationPublicKey = new solanaWeb3.PublicKey('B46odqFyjd3vr6WRGrHCdSFVJ3g82vz7r61Bjbf7AoKA');

  return await transferTokens(account, sourcePublicKey, destinationPublicKey, 10)
}

const App: () => React$Node = () => {
  // testTransferTokens()
  //     .then(result => console.log(result))
  //     .catch(error => console.log(error));


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
