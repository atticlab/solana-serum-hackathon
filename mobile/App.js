import './global';
import React, {useEffect} from 'react';
import 'react-native-get-random-values';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-get-random-values';
import MerchantScreen from './src/screens/Merchant';
import WalletScreen from './src/screens/Wallet';
import SavingsScreen from './src/screens/Savings';
import SettingsScreen from './src/screens/Settings';
import ScannerScreen from './src/screens/qr_scanner/Scanner';
import MerchantIcon from './src/assets/images/merchant.svg';
import WalletIcon from './src/assets/images/wallet.svg';
import SavingIcon from './src/assets/images/savings.svg';
import {getPullData} from './src/crypto/pool';
import {getData, storeData} from './src/services/storageService';
import {createTokenAccount, createPoolTokenAccount} from './src/crypto/account';

const Tab = createBottomTabNavigator();
const Main = createStackNavigator();

const App: () => React$Node = () => {
  useEffect(() => {
    createTokenAccount().then(async (tokenAccount) => {
      if ((await getData('tokenAccount')) === null) {
        await storeData('tokenAccount', tokenAccount.toString());
      }
    });
    createTokenAccount().then(async (tokenAccount) => {
      if ((await getData('tokenMerchantAccount')) === null) {
        await storeData('tokenMerchantAccount', tokenAccount.toString());
      }
    });
    createPoolTokenAccount().then(async (poolTokenAccount) => {
      if ((await getData('poolTokenAccount')) === null) {
        await storeData('poolTokenAccount', poolTokenAccount.toString());
      }
    });
    getPullData().then(async (res) => {
      if (
        (await getData('nonce')) === null ||
        (await getData('poolMint')) === null ||
        (await getData('savings')) === null
      ) {
        await storeData('nonce', res.nonce);
        await storeData('poolMint', res.poolMint.toString());
        await storeData('savings', res.savings.toString());
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
