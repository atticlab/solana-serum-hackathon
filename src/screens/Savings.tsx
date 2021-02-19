import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export default function SavingsScreen({navigation}: any) {
  useFocusEffect(
    useCallback(() => {
      const stackNavigator = navigation.dangerouslyGetParent();
      if (stackNavigator) {
        stackNavigator.setOptions({
          title: 'Savings',
        });
      }
    }, [navigation]),
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={styles.blockSavings}>
        <View style={styles.blockInfoItem}>
          <Text style={styles.title}>Total saved</Text>
          <Text style={styles.value}>0.333 ETH</Text>
        </View>
        <View style={styles.blockInfoItem}>
          <Text style={styles.title}>Total interest</Text>
          <Text style={styles.value}>0.333 ETH</Text>
        </View>
        <View>
          <Text style={styles.title}>APY</Text>
          <Text style={styles.value}>0.23 %</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blockSavings: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 17,
    paddingVertical: 20,
    paddingHorizontal: 35,
    minWidth: 250,
  },
  blockInfoItem: {
    paddingBottom: 15,
  },
  title: {
    fontWeight: '700',
    fontSize: 22,
    color: '#000000',
  },
  value: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 22,
    color: '#8C8C8C',
    textAlign: 'center',
  },
});
