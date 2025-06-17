import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import COLORS from '../constants/Colors';
import Button from '../components/Button';
import { router } from 'expo-router';



const Onboarding1 = () => {
  return (

    <SafeAreaView style={styles.safe}>
      
      <View style={styles.formContainer}>

        <TouchableOpacity
          onPress={()=>{router.push ('/signIn')}}>
         <Text style={{textAlign:'right', fontSize:24, color:COLORS.primary}}>Skip</Text>
       </TouchableOpacity>

       <View style={{flexDirection:'row', alignItems:'center', marginLeft:10}}>
         <Image source={require('../assets/images/eclipse.png')}
         style={{width:77, height:77, alignItems:'flex-start'}}/>
         <Text style={[styles.title, {position:'absolute', left:45}]}>Monthly Track</Text>
       </View>


        <Image
          source={require('../assets/images/firstpicture.png')}
          style={styles.image}
          resizeMode='contain'
        />

      
      </View>

     <View style={{paddingHorizontal:20}}>
        <Text style={styles.subtitle}>
          You can track your money, limit expenses and prioritize your finances
        </Text>
      </View>

      <View style={{alignItems:'center', marginVertical:20}}>
       <Image source={require('../assets/images/control.png')}
       resizeMode='contain'
       style={{height:10, width:60}}/>
      </View>

     <View style={{paddingHorizontal:30}}>
        <Button text={'Get Started'} onPress={()=>{
         router.navigate ('/Onboarding2')
        }}/>
      </View>

    </SafeAreaView>
  );
};
export default Onboarding1

  