import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Animated,
  Image,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const size = Dimensions.get('window').width * 0.4;

function Splash() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#63b2b6', '#63b2b6', '#6dc5c5']}
        start={[0.1, 0.1]}
        style={styles.linearGradient}
      >
        <Image
          style={{ height: size, width: size }}
          source={require('./../assets/laugh.png')}
        />
        <Text style={styles.text}>Built With Love From Melvin Manni</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    textAlign: 'center',
  },
});
export default Splash;
