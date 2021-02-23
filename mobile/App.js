import './global';

import React, {useEffect} from 'react';
import 'react-native-get-random-values';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import * as solanaWeb3 from '@pragma-technologies/react-native-solana';
import {createAndInitializeTokenAccount} from './src/crypto/account';
import {transferTokens} from './src/crypto/transfer';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import 'react-native-get-random-values';
// import solanaWeb3 from './src/utils/solanaWeb3';
import MerchantScreen from './src/screens/Merchant';
import WalletScreen from './src/screens/Wallet';
import SavingsScreen from './src/screens/Savings';
import SettingsScreen from './src/screens/Settings';
import ScannerScreen from './src/screens/qr_scanner/Scanner';
import MerchantIcon from './src/assets/images/merchant.svg';
import WalletIcon from './src/assets/images/wallet.svg';
import SavingIcon from './src/assets/images/savings.svg';
import SettingIcon from './src/assets/images/setting.svg';
import {getPullData} from './src/crypto/pool';
import {
  testCreatePoolTokenAccount,
  testCreateTokenAccount,
  testTransferTokens,
  testCreateAuthority,
} from './src/examples';
import {getData, storeData} from './src/services/storageService';
import {getBalance} from './src/crypto/balance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Main = createStackNavigator();

const App: () => React$Node = () => {
  useEffect(() => {
    testCreateTokenAccount().then(async (tokenAccount) => {
      console.log(tokenAccount);
      if ((await getData('tokenAccount')) === null) {
        console.log(tokenAccount.toString());

        storeData('tokenAccount', tokenAccount.toString());
      }
    });
    testCreatePoolTokenAccount().then(async (poolTokenAccount) => {
      console.log(poolTokenAccount.toString());

      if ((await getData('poolTokenAccount')) === null) {
        console.log(poolTokenAccount.toString());

        storeData('poolTokenAccount', poolTokenAccount.toString());
      }
    });

    getPullData().then(async (res) => {
      console.log(poolTokenAccount.toString());
      if (
        (await getData('nonce')) === null &&
        (await getData('poolMint')) === null &&
        (await getData('savings')) === null
      ) {
        console.log(poolTokenAccount.toString());

        storeData('nonce', res.nonce);
        storeData('poolMint', res.poolMint.toString());
        storeData('savings', res.savings.toString());
      }
    });
  }, []);
  function MyTabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {
            position: 'absolute',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={{paddingTop: 15}}>
                <MerchantIcon />
              </View>
            ),
          }}
          name="Merchant"
          component={MerchantScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={{paddingTop: 15}}>
                <WalletIcon />
              </View>
            ),
          }}
          name="Wallet"
          component={WalletScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={{paddingTop: 15}}>
                <SavingIcon />
              </View>
            ),
          }}
          name="Savings"
          component={SavingsScreen}
        />
      </Tab.Navigator>
    );
  }
  function MyStack({navigation}) {
    return (
      <Main.Navigator
        screenOptions={({navigation, route}) => {
          return {
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitleStyle: {alignSelf: 'center'},
          };
        }}>
        <Main.Screen
          name="Home"
          options={({route}) => ({
            title: route.title,
          })}
          component={MyTabs}
        />
        <Main.Screen
          options={{headerShown: false}}
          name="Scanner"
          component={ScannerScreen}
        />
        <Main.Screen
          options={{
            headerRight: false,
            headerTitleStyle: {paddingLeft: 0},
          }}
          name="Settings"
          component={SettingsScreen}
        />
      </Main.Navigator>
    );
  }

  return (
    <>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
