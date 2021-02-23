import React, {useCallback, useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="small" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    position: 'absolute',
    zIndex: 9347,
    height: '100%',
    width: '100%',
    opacity: 0.5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
