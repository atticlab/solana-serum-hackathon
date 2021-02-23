import {StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../../utils/Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: DEVICE_HEIGHT,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -DEVICE_HEIGHT * 0.1,
    zIndex: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: '#b30000',
    zIndex: 10000,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  headerBox: {
    position: 'absolute',
    top: DEVICE_HEIGHT * 0.05,
    left: DEVICE_WIDTH * 0.07,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
  },
  topContainer: {
    width: DEVICE_WIDTH,
    backgroundColor: '#e8e8e8',
    opacity: 0.1,
  },
  maskWrapper: {
    backgroundColor: 'transparent',
    width: DEVICE_WIDTH,
    display: 'flex',
    flexDirection: 'row',
  },
  sideContainer: {
    backgroundColor: '#e8e8e8',
    opacity: 0.1,
    zIndex: -1,
  },
  bottomContainer: {
    width: DEVICE_WIDTH,
    backgroundColor: '#e8e8e8',
    opacity: 0.1,
    zIndex: 10,
  },
  topLeft: {
    position: 'absolute',
    top: -4,
    left: -4,
  },
  topRight: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: -4,
    left: -4,
  },
  bottomRight: {
    position: 'absolute',
    bottom: -4,
    right: -4,
  },
});
