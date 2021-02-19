import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export default function SavingsScreen({navigation}: any) {
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
  return (
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
          <Text style={{fontSize: 65, fontWeight: '900'}}>10000</Text>
        </View>
        <View>
          <Text style={styles.info}>Interest : 100</Text>
          <Text style={styles.info}>APY : 20%</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>Withdraw</Text>
      </TouchableOpacity>
    </View>
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
