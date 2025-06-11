import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const Onboarding1 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/onboarding1.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Track Smarter</Text>
      <Text style={styles.subtitle}>
        Monitor your activities and improve your performance effortlessly.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: 'center',
  },
});

export default Onboarding1;