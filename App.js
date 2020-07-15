import React, { useState, useEffect } from 'react';
import Splash from './components/Splash';
import Home from './components/Home';
import { View, StyleSheet } from 'react-native';

export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3500);
  }, []);
  return <View style={styles.container}>{splash ? <Splash /> : <Home />}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
