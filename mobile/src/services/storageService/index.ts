import BN from 'bn.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (key: any, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

export const getData = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (e) {}
};

export const addPrecision = (number) => {
  return new BN(number * Math.pow(10, 9));
};
