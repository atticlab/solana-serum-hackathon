import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DismissKeyboard} from './Merchant';

export default function SettingsScreen() {
  return (
    <DismissKeyboard>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View>
          <View style={{marginBottom: 45}}>
            <Text style={styles.title}>Address owner</Text>
            <View style={styles.addressBlock}>
              <Text style={styles.address}>0xdfFdsf...SD9X</Text>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Private key</Text>
            <View style={styles.addressBlock}></View>
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    backgroundColor: '#EBEBEB',
    borderRadius: 10,
    paddingLeft: 10,
  },
  addressBlock: {
    backgroundColor: '#E7E7E7',
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
  },
  address: {
    borderRadius: 23,
    paddingHorizontal: 80,
    paddingVertical: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 19,
    color: '#8D8D8D',
    textAlign: 'center',
    marginBottom: 15,
  },
});
