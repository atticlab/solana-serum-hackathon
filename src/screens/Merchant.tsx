import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Clipboard,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useFocusEffect} from '@react-navigation/native';
import {getData} from '../services/storageService';
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {getBalance} from '../crypto/balance';

export const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function MerchantScreen({navigation, route}: any) {
  const [value, onChangeText] = useState('');
  const [accountAddress, setAccountAddress] = useState('');

  const returnObj = (data: string) => {
    return JSON.stringify({
      name: 'solana',
      amount: data,
      address: accountAddress,
    });
  };

  useFocusEffect(
    useCallback(() => {
      const stackNavigator = navigation.dangerouslyGetParent();
      if (stackNavigator) {
        stackNavigator.setOptions({
          title: 'Merchant',
          headerRight: false,
        });
      }
    }, [navigation]),
  );

  const [balanceCount, setBalance] = useState<number>();

  const balance = async () => {
    const sourcePublicKeyStorage = await getData('tokenAccount');
    if (sourcePublicKeyStorage) {
      setAccountAddress(sourcePublicKeyStorage);
      console.log(sourcePublicKeyStorage, 'sourcePublicKeyStorage');
      const pk = new solanaWeb3.PublicKey(sourcePublicKeyStorage);
      const balance = await getBalance(pk);
      setBalance(balance / Math.pow(10, 9));
      console.log(balance);
    }
  };

  useEffect(() => {
    balance();
  }, [navigation, route]);
  useEffect(() => {
    const interval = setInterval(() => {
      balance();
    }, 20000);
    return () => clearInterval(interval);
  }, []);
  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          paddingTop: 20,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
        }}>
        <View>
          <Text style={styles.label}>Address</Text>
          <View style={styles.infoBlockItem}>
            <Text style={styles.address}>{`${accountAddress.substring(
              0,
              6,
            )}…${accountAddress.substring(accountAddress.length - 4)}`}</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Balance</Text>
          <View style={styles.infoBlockItem}>
            <Text style={styles.balance}>{balanceCount}</Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder={'Write amount'}
            placeholderTextColor={'#8C8C8C'}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <QRCode size={150} value={returnObj(value)} />
        </View>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  infoBlockItem: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#E7E7E7',
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
  label: {
    color: '#8C8C8C',
    marginBottom: 5,
  },
  address: {
    fontWeight: '500',
    fontSize: 19,
  },
  balance: {
    fontWeight: '500',
    fontSize: 19,
  },
  input: {
    fontSize: 19,
    paddingVertical: 13,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    paddingLeft: 15,
  },
});
