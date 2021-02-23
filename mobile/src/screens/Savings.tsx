import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {SECRET} from '../utils/Constants';
import {createAuthority, getPullData} from '../crypto/pool';
import {withdrawTokens} from '../crypto/withdraw';
import {
  nonce,
  poolMint,
  poolTokenAccount,
  savings,
  tokenAccount,
} from '../services/storageService';
import {getBalance} from '../crypto/balance';
import {Loader} from '../components/loader';

import BN from 'bn.js';

export default function SavingsScreen({navigation, route}: any) {
  useFocusEffect(
    useCallback(() => {
      const stackNavigator = navigation.dangerouslyGetParent();
      if (stackNavigator) {
        stackNavigator.setOptions({
          title: 'Savings',
          headerRight: false,
        });
      }
    }, [navigation]),
  );

  const testWithdraw = async () => {
    const account = new solanaWeb3.Account(SECRET);
    const savingBalance = (await balance()) * Math.pow(10, 9);
    const sourcePublicKeyStorage = tokenAccount;
    const sourcePublicKey = new solanaWeb3.PublicKey(sourcePublicKeyStorage);
    const depositTokenPublicKeyStorage = poolTokenAccount;
    const depositTokenPublicKey = new solanaWeb3.PublicKey(
      depositTokenPublicKeyStorage,
    );

    const nonceStorage = nonce;
    const poolMintStorage = poolMint;
    const savingsStorage = savings;

    const authority = await createAuthority(nonceStorage);

    return await withdrawTokens(
      account,
      depositTokenPublicKey,
      authority,
      savingsStorage,
      sourcePublicKey,
      poolMintStorage,
      savingBalance,
    );
  };

  const [loading, setLoading] = useState(false);
  const withdraw = async () => {
    setLoading(true);
    await testWithdraw()
      .then(async (res) => {
        console.log(res, 'result withdraw');
        Alert.alert('Success');
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [balanceCount, setBalance] = useState<number>();

  const balance = async () => {
    const depositTokenPublicKeyStorage = poolTokenAccount;

    const pk = new solanaWeb3.PublicKey(depositTokenPublicKeyStorage);
    const balance = (await getBalance(pk)) / Math.pow(10, 9);
    setBalance(balance);
    return balance;
  };

  useEffect(() => {
    balance();
  }, [route]);

  useEffect(() => {
    const interval = setInterval(() => {
      balance();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          paddingBottom: 100,
        }}>
        <View style={{paddingTop: 50}}>
          <View>
            <Text style={styles.label}>Balance</Text>
            <Text style={{fontSize: 45, fontWeight: '900'}}>
              {parseFloat((balanceCount ?? 0).toString()).toFixed(2)}
            </Text>
          </View>
          <View>
            <Text style={styles.info}>Interest : 0</Text>
            <Text style={styles.info}>APY : 25%</Text>
          </View>
        </View>
        <TouchableOpacity
          disabled={!balanceCount}
          style={styles.button}
          onPress={withdraw}>
          <Text style={styles.textBtn}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#4F4B4B',
    marginBottom: 5,
    fontSize: 25,
    fontWeight: '500',
  },
  info: {
    textAlign: 'right',
    color: '#4F4B4B',
    marginBottom: 5,
    fontSize: 15,
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
  textBtn: {
    textAlign: 'center',
    fontWeight: '700',
  },
});