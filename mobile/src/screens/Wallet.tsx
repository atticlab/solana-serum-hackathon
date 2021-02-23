import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {DismissKeyboard} from './Merchant';
import ScanIcon from '../assets/images/qr.svg';
// @ts-ignore
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {transferTokens} from '../crypto/transfer';
import {SECRET, SOLANA_PRECISION} from '../utils/Constants';
import {createAuthority, getPullData} from '../crypto/pool';
import {getBalance} from '../crypto/balance';
import {Loader} from '../components/loader';

import BN from 'bn.js';
import {addPrecision, getData} from '../services/storageService';

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
                style={{paddingRight: 20, position: 'absolute'}}
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

  const testTransferTokens = async () => {
    const account = new solanaWeb3.Account(SECRET);

    const sourcePublicKeyStorage = await getData('tokenAccount');
    const pk = new solanaWeb3.PublicKey(sourcePublicKeyStorage);
    const balance = new BN(await getBalance(pk));

    const sourcePublicKey = new solanaWeb3.PublicKey(sourcePublicKeyStorage);

    const destinationPublicKey = new solanaWeb3.PublicKey(dataQR?.address);

    const depositTokenPublicKeyStorage = await getData('poolTokenAccount');
    const depositTokenPublicKey = new solanaWeb3.PublicKey(
      depositTokenPublicKeyStorage,
    );

    const nonceStorage = await getData('nonce');
    const poolMintStorage = await getData('poolMint');
    const savingsStorage = await getData('savings');

    const authority = await createAuthority(await getData('nonceStorage'));
    const amount = addPrecision(dataQR?.amount.replace(/,/g, '.'));
    const releaseAmount = balance.sub(new BN(amount));
    const savingsAmount = releaseAmount.sub(
      new BN(Math.floor(releaseAmount / Math.pow(10, SOLANA_PRECISION))).mul(
        new BN(10).pow(new BN(SOLANA_PRECISION)),
      ),
    );

    return await transferTokens(
      account,
      sourcePublicKey,
      destinationPublicKey,
      authority,
      savingsStorage,
      depositTokenPublicKey,
      poolMintStorage,
      amount.toString(),
      savingsAmount,
    );
  };

  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!dataQR?.amount || !dataQR?.address || Number(dataQR?.amount) === 0)
      return;

    setLoading(true);
    await testTransferTokens()
      .then((result) => {
        Alert.alert('Success');
      })
      .catch((error) => {
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
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {loading && <Loader />}
      <DismissKeyboard>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          alwaysBounceVertical={false}>
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
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(text) =>
                  setDataQR({
                    ...dataQR,
                    amount: text,
                  })
                }
                value={dataQR?.amount || ''}
                placeholder={'Amount'}
                placeholderTextColor={'#8C8C8C'}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={send}>
              <Text style={styles.textBtn}>Send</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </DismissKeyboard>
    </View>
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
