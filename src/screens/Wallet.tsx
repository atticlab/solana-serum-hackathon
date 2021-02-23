import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {DismissKeyboard} from './Merchant';

import ScanIcon from '../assets/images/qr.svg';
// @ts-ignore
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {transferTokens} from '../crypto/transfer';
import {SECRET} from '../utils/Constants';
import {createAuthority, getPullData} from '../crypto/pool';
import {getData} from '../services/storageService';
import {getBalance} from '../crypto/balance';
import {Loader} from '../components/loader';

export default function WalletScreen({navigation, route}: any) {
  useFocusEffect(
    useCallback(() => {
      const stackNavigator = navigation.dangerouslyGetParent();
      if (stackNavigator) {
        stackNavigator.setOptions({
          title: 'Wallet',
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{paddingRight: 10, position: 'absolute'}}
                onPress={() => navigation.navigate('Scanner')}>
                <ScanIcon />
              </TouchableOpacity>
            );
          },
        });
      }
    }, [navigation]),
  );

  const [dataQR, setDataQR] = useState(route?.params?.data);
  console.log(dataQR);
  const testTransferTokens = async () => {
    const account = new solanaWeb3.Account(SECRET);
    // 1
    const sourcePublicKeyStorage = await getData('tokenAccount');
    console.log(sourcePublicKeyStorage, 'sourcePublicKeyStorage5050505050505');
    const pk = new solanaWeb3.PublicKey(sourcePublicKeyStorage);
    const balance = await getBalance(pk);
    console.log(balance, 'balance');
    const sourcePublicKey = new solanaWeb3.PublicKey(
      // 'HxkvUmLEzHnddbMqJmU6xYf8UqBrpVbJqgKzYEv7g28r',
      // 'FrADbv4YB2qgac1JhSK6FLpmbwMGfAbg32BEAM7pJkSD',
      sourcePublicKeyStorage,
    );
    // dataQR
    console.log(dataQR?.address, 'dataQR?.address');
    const destinationPublicKey = new solanaWeb3.PublicKey(
      // 'J82L8cnT1tCHWbR286H3bYsJ6dfoDCC8Ymr4A1r72RAM',
      // '5TpMrny4oZzjoSX6HQixMZzwFvsfZV24nZ9TKYRVHLGn',
      // '7quYDpkzmxS73kcrM4E7Yq82vuDcVv8HUqTzmFaCFBK7',
      dataQR?.address,
    );
    // 2
    const depositTokenPublicKeyStorage = await getData('poolTokenAccount');

    console.log(depositTokenPublicKeyStorage, 'depositTokenPublicKeyStorage');
    const depositTokenPublicKey = new solanaWeb3.PublicKey(
      // '2rFuPBhMT8jaEZJA3E2dxwQDU9LRXEY771bhhjZcTAef',
      depositTokenPublicKeyStorage,
    );

    const nonceStorage = await getData('nonce');
    const poolMintStorage = await getData('poolMint');
    const savingsStorage = await getData('savings');

    const authority = await createAuthority(nonceStorage);
    console.log(dataQR?.amount, 'dataQR?.amountdataQR?.amountdataQR?.amount');
    return await transferTokens(
      account,
      sourcePublicKey,
      destinationPublicKey,
      authority,
      savingsStorage,
      depositTokenPublicKey,
      poolMintStorage,
      dataQR?.amount,
      1,
    );
  };

  const [loading, setLoading] = useState(false);

  const send = async () => {
    setLoading(true);
    await testTransferTokens()
      .then((result) => {
        console.log(result, 'result');
        Alert.alert('Success');
      })
      .catch((error) => {
        console.log(error, 'error');
        Alert.alert('Error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (route?.params?.data) {
      setDataQR(route?.params?.data);
    }
  }, [route]);

  return (
    <>
      {loading && <Loader />}
      <DismissKeyboard>
        <View
          style={{
            flex: 1,
            paddingBottom: 100,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
          }}>
          <View style={{marginTop: 20}}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setDataQR({...dataQR, address: text})}
              value={dataQR?.address}
              placeholder={'Address'}
              placeholderTextColor={'#8C8C8C'}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.label}>Amount</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(text) =>
                setDataQR({
                  ...dataQR,
                  amount: text.replace(/[^0-9\.]/g, ''),
                })
              }
              value={dataQR?.amount || ''}
              placeholder={'Amount'}
              placeholderTextColor={'#8C8C8C'}
            />
          </View>
          <TouchableOpacity
            // disabled={!dataQR.amount || !dataQR.address}
            style={styles.button}
            onPress={send}>
            <Text style={styles.textBtn}>Send</Text>
          </TouchableOpacity>
        </View>
      </DismissKeyboard>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    position: 'absolute',
    zIndex: 9347,
    height: '100%',
    width: '100%',
    opacity: 0.5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  label: {
    color: '#8C8C8C',
    marginBottom: 5,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontWeight: '700',
    fontSize: 23,
    color: '#565656',
    backgroundColor: '#EBEBEB',
    borderRadius: 40,
    marginTop: 40,
  },
  input: {
    fontSize: 19,
    paddingVertical: 13,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  textBtn: {
    textAlign: 'center',
    fontWeight: '700',
  },
});
