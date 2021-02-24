import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useFocusEffect} from '@react-navigation/native';
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {getBalance} from '../crypto/balance';
import {getData} from '../services/storageService';
import {SOLANA_PRECISION} from '../utils/Constants';
import Clipboard from '@react-native-clipboard/clipboard';
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
      const pk = new solanaWeb3.PublicKey(sourcePublicKeyStorage);
      const balance = await getBalance(pk);
      setBalance(balance);
    }
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
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <DismissKeyboard>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          alwaysBounceVertical={false}>
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
              <QRCode size={150} value={returnObj(value.replace(/,/g, '.'))} />
            </View>
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
  input: {
    fontSize: 19,
    paddingVertical: 13,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});
