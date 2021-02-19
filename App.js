import './global';
import React from 'react';
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

async function testCreateAndInitializeTokenAccount() {
  // const secret = Buffer.from([184,234,94,108,74,201,179,86,173,136,230,45,12,108,66,181,77,14,211,111,58,168,52,107,214,173,83,53,61,158,61,118,55,203,30,99,89,70,138,32,202,42,222,88,93,51,242,193,94,51,43,225,255,106,36,30,93,224,10,118,117,123,43,221]);
  const secret = Buffer.from([
    12,
    66,
    39,
    208,
    30,
    134,
    222,
    70,
    133,
    220,
    111,
    204,
    182,
    176,
    174,
    17,
    190,
    133,
    165,
    65,
    141,
    36,
    137,
    200,
    11,
    206,
    151,
    23,
    139,
    193,
    234,
    25,
    87,
    55,
    192,
    214,
    33,
    175,
    182,
    93,
    13,
    99,
    116,
    111,
    154,
    183,
    74,
    60,
    67,
    204,
    120,
    217,
    99,
    168,
    209,
    155,
    198,
    63,
    102,
    54,
    195,
    211,
    31,
    14,
  ]);

  const account = new solanaWeb3.Account(secret);

  const newAccount = new solanaWeb3.Account();
  const mintPublicKey = new solanaWeb3.PublicKey(
    'JLzcay8TWyWnyZPfGsgn6UhvJa7Nk7Ch45odKyykbXx',
  );

  return await createAndInitializeTokenAccount(
    account,
    mintPublicKey,
    newAccount,
  );
}

const Tab = createBottomTabNavigator();
const Main = createStackNavigator();

const App: () => React$Node = () => {
  // testTransferTokens()
  //     .then(result => console.log(result))
  //     .catch(error => console.log(error));
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
            // headerRight: () => {
            //   return (
            //     <TouchableOpacity
            //       style={{paddingRight: 10, position: 'absolute'}}
            //       onPress={() => navigation.navigate('Settings')}>
            //       <SettingIcon />
            //     </TouchableOpacity>
            //   );
            // },
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
