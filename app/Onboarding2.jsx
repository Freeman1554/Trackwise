import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../constants/Colors';

const { width, height } = Dimensions.get('window');

const Onboarding2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/onboarding2.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Set Your Goals</Text>
      <Text style={styles.subtitle}>
        Define your track milestones and let us help you reach them with ease.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ... // same styles as Onboarding1
});

export default Onboarding2;