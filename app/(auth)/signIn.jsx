
// import { Text, } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// =======
// import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
// import { useNavigation } from '@react-navigation/native';

// import COLORS from '../../constants/Colors';
// import { useRouter } from 'expo-router';
// import { router } from 'expo-router';
// import Button from '../../components/Button';
// import { useState } from 'react';
// import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import authStyles from './styles';
// const signIn = () => {
//   const [fullName, setFullName] = useState('');
//   const [emailPhone, setEmailPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userFocused, setUserFocused] = useState(false);
//   const [emailFocused, setEmailFocused] = useState(false);
//   const [passwordFocused, setPasswordFocused] = useState(false);
//   const [confirmFocused, setConfirmFocused] = useState(false);
  
  
//   const handleSignIn = () => {
//     console.log('Sign In pressed!');
//     console.log('Email/Phone:', emailPhone);
//     console.log('Password:', password);
//     console.log('Agreed to Terms:', agreeToTerms);
//     // Add your sign-in logic here (e.g., API call)
//   };


// const SignIn = () => {
//   return (
//     <SafeAreaView>
//       <Text style={{color:COLORS.primary}}>Hello</Text>




//       <Button onPress={()=>{
//                 router.navigate('/account')
//             }} 
//        text={'SignIn'}/>
     
//     </SafeAreaView>
//   );
// }
// export default SignIn
  

//   const handleSignUp = () => {
//     // Navigate to sign-up screen
//     console.log('Navigating to Login');
//   };

  


//   const router = useRouter();
//   const navigation = useNavigation();

//   return(

//     <SafeAreaView style={authStyles.mainContainer}>

//       <View style={authStyles.logoContainer}>
//         <Image
//           source={require('@/assets/images/trackwise.png')} 
//           style={authStyles.logo}
//           resizeMode="contain"
//         />
//       </View>

//         <View style={authStyles.header}>

//           <Text style={{fontFamily:'PoppinsBold', fontSize:23,
//             fontWeight:600, color:COLORS.white}}>Welcome to TrackWise</Text>
            
//           <Text style={{fontFamily:'PoppinsRegular',
//           fontSize:17, fontWeight:400}}>Let's help you meet your tasks!</Text>
//         </View>

//       <ScrollView>  

//         <View style={authStyles.formContainer}>
//          <Text style={authStyles.inputLabel}>Sign Up <Text style={{fontSize: 16}}>in few seconds</Text> </Text>
          
//           <View style={{gap:30}}>
//             <View style={authStyles.inputWrapper}>
            
//             <TextInput
//               style={[authStyles.input, 
//               {borderWidth:userFocused ? 1 : 1, borderColor: userFocused ? COLORS.primary: COLORS.greyText}]}
//               cursorColor={COLORS.primary}
//               placeholder="Full Name"
//               value={fullName}
//               onChangeText={setFullName}
//               keyboardType="name"
//               autoCapitalize="none"
              
//               onBlur={()=>{
//                 setUserFocused(false)
//               }}
              
//               onFocus={()=>{
//                 setUserFocused(true)
//               }}/>
//             </View>

//           <View style={authStyles.inputWrapper}>
            
          
//             <TextInput
//               style={[authStyles.input, 
//               {borderWidth:userFocused ? 1 : 1, borderColor: emailFocused ? COLORS.primary: COLORS.greyText}]}
//               cursorColor={COLORS.primary}
//               placeholder="Email"
//               value={emailPhone}
//               onChangeText={setEmailPhone}
//               keyboardType="email-address"
//               autoCapitalize="none"
//               onBlur={()=>{
//                 setEmailFocused(false)
//               }}
              
//               onFocus={()=>{
//                 setEmailFocused(true)
//               }}/>
//           </View>

//           <View style={authStyles.inputWrapper}>
            
           
//             <TextInput
//               style={[authStyles.input, 
//               {borderWidth:userFocused ? 1 : 1, borderColor: passwordFocused ? COLORS.primary: COLORS.greyText}]}
//               cursorColor={COLORS.primary}
//               placeholder="Password"
//               value={password}
//               onChangeText={setPassword}
//               keyboardType="default"
//               autoCapitalize="none"
//               onBlur={()=>{
//                 setPasswordFocused(false)
//               }}
              
//               onFocus={()=>{
//                 setPasswordFocused(true)
//               }}/>
//           </View>

//           <View style={authStyles.inputWrapper}>
            
          
//             <TextInput
//               style={[authStyles.input, 
//               {borderWidth:userFocused ? 1 : 1, borderColor: confirmFocused ? COLORS.primary: COLORS.greyText}]}
//               cursorColor={COLORS.primary}
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//               keyboardType="default"
//               autoCapitalize="none"
//               onBlur={()=>{
//                 setConfirmFocused(false)
//               }}
              
//               onFocus={()=>{
//                 setConfirmFocused(true)
//               }}/>
//             </View>
//           </View>

//           <View style={{ marginTop:30}}>
//             <Button text={'Sign Up'} onPress={()=>{
//              router.push ('/login')
//             }}/>
//           </View>

//           <View style={authStyles.signUpPrompt}>
//             <Text style={authStyles.signUpText}>Already have an account?</Text>
//             <TouchableOpacity onPress={handleSignUp}>
//               <Text style={authStyles.signUpLink}>Login</Text>
//             </TouchableOpacity>
//           </View>

          

//         </View>
//       </ScrollView>

  
//     </SafeAreaView>
//   );
// }

// export default signIn;


 
