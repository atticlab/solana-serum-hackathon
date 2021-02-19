import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {DismissKeyboard} from './Merchant';

import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {transferTokens} from '../crypto/transfer';

async function testTransferTokens() {
  const secret = Buffer.from([
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
  ]);
  // const secret = Buffer.from([12,66,39,208,30,134,222,70,133,220,111,204,182,176,174,17,190,133,165,65,141,36,137,200,11,206,151,23,139,193,234,25,87,55,192,214,33,175,182,93,13,99,116,111,154,183,74,60,67,204,120,217,99,168,209,155,198,63,102,54,195,211,31,14]);
  const account = new solanaWeb3.Account(secret);

  const sourcePublicKey = new solanaWeb3.PublicKey(
    'HxkvUmLEzHnddbMqJmU6xYf8UqBrpVbJqgKzYEv7g28r',
  );
  const destinationPublicKey = new solanaWeb3.PublicKey(
    'B46odqFyjd3vr6WRGrHCdSFVJ3g82vz7r61Bjbf7AoKA',
  );

  // const sourcePublicKey = new solanaWeb3.PublicKey('EhNLhAik6LAwxizPv5MTiJLrZRXQr7psHjuxsimhmYyF');
  // const destinationPublicKey = new solanaWeb3.PublicKey('B46odqFyjd3vr6WRGrHCdSFVJ3g82vz7r61Bjbf7AoKA');

  return await transferTokens(
    account,
    sourcePublicKey,
    destinationPublicKey,
    10,
  );
}
export default function WalletScreen({navigation, route}: any) {
  const send = () => {
    testTransferTokens()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const onPressButton = () => {
    console.log('Send transaction');
  };

  useEffect(() => {
    if (route?.params?.data) {
      setDataQR(route?.params?.data);
    }
  }, [route]);
  const [dataQR, setDataQR] = useState(route?.params?.data);

  useFocusEffect(
    useCallback(() => {
      const stackNavigator = navigation.dangerouslyGetParent();
      if (stackNavigator) {
        stackNavigator.setOptions({
          title: 'Wallet',
        });
      }
    }, [navigation]),
  );
  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 100,
          backgroundColor: '#fff',
        }}>
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>Send transaction</Text>
          <View style={styles.blockInput}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setDataQR({address: text})}
              value={dataQR?.address}
              placeholder={'Address'}
              placeholderTextColor={'#8C8C8C'}
            />
          </View>
          <View style={styles.blockInput}>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setDataQR({amount: text})}
              value={dataQR?.amount || ''}
              placeholder={'Amount'}
              placeholderTextColor={'#8C8C8C'}
            />
          </View>
          <Text style={{textAlign: 'center', marginVertical: 15}}>or</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation?.navigate('Scanner')}>
            <Text style={{textAlign: 'center'}}>Scan invoice</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={send}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  blockInput: {
    marginTop: 40,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    borderColor: 'gray',
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontWeight: '500',
    fontSize: 23,
    color: '#565656',
    backgroundColor: '#F7F7F7',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#000000',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 15,
  },
});
