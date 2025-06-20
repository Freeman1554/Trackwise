import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import COLORS from '../constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Button from '../components/Button';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const Onboarding2 = () => {

  return (
    <SafeAreaView style={styles.onboard}>

      <View style={styles.onboard}>

        <TouchableOpacity
          onPress={()=>{router.push ('/signIn')}}>
         <Text style={{alignSelf:'flex-end', fontSize:24, color:COLORS.primary}}>Skip</Text>
       </TouchableOpacity>

       <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
         <Image source={require('../assets/images/eclipse.png')}
         style={{width:77, height:77, alignItems:'flex-start'}}/>
         <Text style={[styles.title, {position:'absolute', left:46}]}>Set Budget</Text>
        </View>


        <Image
        source={require('../assets/images/picture.png')}
        style={styles.image}
        resizeMode="contain"
        />
      </View>

      <View>
       <Text style={styles.subtitle}>
       Start taking control of your monthly budget and personal finances
       </Text>
      </View>

       <View style={{alignItems:'center', marginVertical:20}}>
       <Image source={require('../assets/images/control2.png')}
       resizeMode='contain'
       style={{height:10, width:60}}/>
      </View>


      <View style={{paddingHorizontal:10, marginVertical:20}}>
        <Button text={'Get Started'} onPress={()=>{
         router.navigate ('/Onboarding3')
        }}/>
      </View>


    </SafeAreaView>
  );
};



export default Onboarding2;