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
import {SOLANA_PRECISION} from '../utils/Constants';
import {createAuthority} from '../crypto/pool';
import {getBalance} from '../crypto/balance';
import {Loader} from '../components/loader';

import BN from 'bn.js';
import {addPrecision, getData} from '../services/storageService';
import Clipboard from "@react-native-clipboard/clipboard";
import {OWNER_ACCOUNT} from "../crypto/utils/constants";

export default function WalletScreen({navigation, route}: any) {
  const [accountAddress, setAccountAddress] = useState('');

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
    const sourcePublicKeyStorage = await getData('tokenAccount');
    const pk = new solanaWeb3.PublicKey(sourcePublicKeyStorage);
    const balance = new BN(await getBalance(pk));

    const sourcePublicKey = new solanaWeb3.PublicKey(sourcePublicKeyStorage);

    const destinationPublicKey = new solanaWeb3.PublicKey(dataQR?.address);

    const depositTokenPublicKeyStorage = await getData('poolTokenAccount');
    const depositTokenPublicKey = new solanaWeb3.PublicKey(
      depositTokenPublicKeyStorage,
    );
    const nonceStorage = Number(await getData('nonce'));
    const poolMintStorage = await getData('poolMint');
    const savingsStorage = await getData('savings');
    const authority = await createAuthority(nonceStorage);

    const amount = addPrecision(dataQR?.amount.replace(/,/g, '.'));
    const releaseAmount = balance.sub(new BN(amount));
    const savingsAmount = releaseAmount.sub(
      new BN(Math.floor(releaseAmount / Math.pow(10, SOLANA_PRECISION))).mul(
        new BN(10).pow(new BN(SOLANA_PRECISION)),
      ),
    );
    return await transferTokens(
      OWNER_ACCOUNT,
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
        console.log('transfer result', result);
        Alert.alert('Success');
      })
      .catch((error) => {
        console.log('errr', error);
        Alert.alert('Error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [balanceCount, setBalance] = useState<number>();

  const balance = async () => {
    const sourcePublicKeyStorage = await getData('tokenAccount');
    if (sourcePublicKeyStorage) {
      setAccountAddress(sourcePublicKeyStorage);
      const pk = new solanaWeb3.PublicKey(sourcePublicKeyStorage);
      const balance = await getBalance(pk);
      setBalance(balance);
    }
  };

  useEffect(() => {
    balance().then();
  }, [route]);

  useEffect(() => {
    const interval = setInterval(() => {
      balance().then();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
              paddingTop: 20,
              backgroundColor: '#fff',
              paddingHorizontal: 20,
            }}>
            <View>
              <Text style={styles.label}>Address</Text>
              <View style={styles.infoBlockItem}>
                <TouchableOpacity
                    onPress={() => Clipboard.setString(accountAddress)}>
                  <Text style={styles.address}>{accountAddress}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.label}>Balance</Text>
              <View style={styles.infoBlockItem}>
                <Text style={styles.balance}>
                  {balanceCount
                      ? parseFloat(
                          (
                              balanceCount / Math.pow(10, SOLANA_PRECISION) ?? 0
                          ).toString(),
                      ).toFixed(2)
                      : 0}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.label}>Recipient</Text>
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
                onChangeText={(text) => {
                  setDataQR({
                    ...dataQR,
                    amount: text,
                  });
                }}
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
  infoBlockItem: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
  label: {fontSize: 15, color: '#8C8C8C', marginBottom: 5},
  address: {
    fontWeight: '800',
    fontSize: 26,
  },
  balance: {
    fontWeight: '800',
    fontSize: 26,
  },
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
