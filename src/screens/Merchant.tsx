import React, {useCallback, useState} from 'react';
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

export const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function MerchantScreen({navigation}: any) {
  const [value, onChangeText] = useState('');
  const accountAddress = '0x3AE4fdc923E7637499498c4936BD4958888b5255ad';
  const copyToClipboard = (address: string) => {
    Clipboard.setString(address);
  };
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
        });
      }
    }, [navigation]),
  );

  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: 20,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity onPress={() => copyToClipboard(accountAddress)}>
          <View style={styles.addressBlock}>
            <Text style={styles.address}>{`${accountAddress.substring(
              0,
              6,
            )}…${accountAddress.substring(accountAddress.length - 4)}`}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.balance}>0.33423432 ETH</Text>
        <View>
          <QRCode size={150} value={returnObj(value)} />
        </View>

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          placeholder={'Amount'}
          placeholderTextColor={'#8C8C8C'}
        />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  addressBlock: {
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    backgroundColor: '#E7E7E7',
  },
  address: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    fontWeight: '500',
    fontSize: 19,
  },
  balance: {
    marginTop: 25,
    fontWeight: '700',
    fontSize: 23,
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    marginTop: 45,
    paddingLeft: 10,
  },
});
