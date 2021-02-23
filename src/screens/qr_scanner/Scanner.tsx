import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RNCamera, RNCameraProps} from 'react-native-camera';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../utils/Constants';
import BackArrow from '../../assets/images/back-arrow.svg';
import {styles} from './ScannerStyles';
import {object} from 'superstruct';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}>
    <Text>Waiting</Text>
  </View>
);

export interface ScannerOwnProps {
  navigation: any;
}

export interface ScannerState {
  shouldReadBarCode: boolean;
  flashMode: RNCameraProps['flashMode'];
}

class Scanner extends Component<ScannerOwnProps> {
  state = {
    shouldReadBarCode: true,
    flashMode: RNCamera.Constants.FlashMode.off,
    error: '',
  };

  private switchFlashMode = () => {
    let newState = RNCamera.Constants.FlashMode.off;
    if (this.state.flashMode === RNCamera.Constants.FlashMode.off) {
      newState = RNCamera.Constants.FlashMode.torch;
    } else {
      newState = RNCamera.Constants.FlashMode.off;
    }
    this.setState({flashMode: newState});
  };

  private renderMask = (maskSize: number = DEVICE_WIDTH * 0.5) => {
    const sideContainerWidth = (DEVICE_WIDTH - maskSize) / 2;
    const topContainerHeight = DEVICE_HEIGHT * 0.24;
    const bottomContainerHeight = DEVICE_HEIGHT - topContainerHeight - maskSize;

    return (
      <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
        <View style={[styles.topContainer, {height: topContainerHeight}]} />
        <View style={[styles.maskWrapper, {height: maskSize}]}>
          <View
            style={[
              styles.sideContainer,
              {width: sideContainerWidth, height: maskSize},
            ]}
          />

          <View style={{width: maskSize, height: maskSize}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.state.error}</Text>
            </View>

            <View style={styles.flashIcon}>
              <TouchableOpacity onPress={() => this.switchFlashMode()}>
                {/* <FlashIcon /> */}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[
              styles.sideContainer,
              {width: sideContainerWidth, height: maskSize},
            ]}
          />
        </View>
        <View
          style={[styles.bottomContainer, {height: bottomContainerHeight}]}
        />
      </View>
    );
  };

  onBarCodeRead = (event: any) => {
    // if (typeof event.data === 'object') {
    const data = JSON.parse(event.data);
    if (data.amount) {
      this.props.navigation.navigate('Wallet', {data});
    } else {
      this.setState({error: 'Error'});
    }
    // } else {
    //   this.setState({error: 'Error'});
    // }
  };

  render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.headerBox}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <View style={styles.iconBox}>
              <BackArrow fill={'black'} width={20} height={25} />
            </View>
          </TouchableOpacity>
        </View>

        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flashMode}
          onBarCodeRead={this.onBarCodeRead}>
          {({status}) => {
            if (status !== 'READY') {
              return <PendingView />;
            }
            return this.renderMask();
          }}
        </RNCamera>
      </View>
    );
  }
}

export default Scanner;
