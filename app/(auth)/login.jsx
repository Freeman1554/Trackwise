// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import authStyles from "./styles";
// import { useState } from "react";
// import COLORS from "../../constants/Colors";
// import Button from "../../components/Button";
// import { useNavigation } from "@react-navigation/native";
// import { router } from "expo-router";




// const login = ()=>{
//   const [emailPhone, setEmailPhone] = useState('');
// const [password, setPassword] = useState('');
// const [showPassword, setShowPassword] = useState(false);
// const [userFocused, setUserFocused] = useState(false);
// const [emailFocused, setEmailFocused] = useState(false);
// const [passwordFocused, setPasswordFocused] = useState(false);
// const handleForgotPassword = () => {
//     // Navigate to forgot password screen
//     console.log('Navigating to Forgot Password');
//   };

//   const handleGoogleSignIn = () => {
//     console.log('Sign In with Google pressed!');
//     // Add your Google sign-in logic here
//   };

//    const handleSignUp = () => {
//     // Navigate to sign-up screen
//     console.log('Navigating to Sign Up');
//   };

//   return (
  
//     <SafeAreaView style={authStyles.mainContainer}>
    
      

//       <View style={authStyles.logoContainer}>
//         <Image
//          source={require('@/assets/images/trackwise.png')} 
//          style={authStyles.logo}
//          resizeMode="contain"
//         />
//       </View>

//       <View style={authStyles.header}>

//         <Text style={{fontFamily:'PoppinsBold', fontSize:23,
//          fontWeight:600, color:COLORS.white}}>Welcome to TrackWise</Text>
//       </View>


//       <View style={authStyles.formContainer}>
//         <Text style={authStyles.inputLogin}>Login</Text>
        
        
//         <View style={{gap:30}}>

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
//              style={[authStyles.input, 
//               {borderWidth:userFocused ? 1 : 1, borderColor: passwordFocused ? COLORS.primary: COLORS.greyText}]}
//               cursorColor={COLORS.primary}
//              placeholder="Password"
//              value={password}
//              onChangeText={setPassword}
//              secureTextEntry={!showPassword}
              
//               onBlur={()=>{
//                 setPasswordFocused(false)
//               }}
              
//               onFocus={()=>{
//                 setPasswordFocused(true)
//               }}/>

//           </View>

           
//         </View>

//         <View style={{flexDirection: 'row',
//           alignItems:'center', marginTop:10}}>

            
//           <TouchableOpacity
//            onPress={() => setShowPassword(!showPassword)}
//            style={authStyles.passwordVisibilityToggle}>

//             <FontAwesome5
//               name={showPassword ? 'check-square' : 'square'}
//               size={20}
//               resizeMode='contain'
//              value={showPassword}
//              onValueChange={setShowPassword}
//              color={showPassword ? '#FFFFFF' : '#D9D9D9'}
//              style={authStyles.checkbox}
//             />

//           </TouchableOpacity> 

//           <Text style={{fontFamily:'PoppinsRegular', fontSize: 16}}>Show Password</Text>
//         </View>
        

//         <View style={{ marginTop:30}}>
//             <Button text={'Login'} onPress={()=>{
//              router.push ('/home')
//             }}/>
//         </View>
              

//         <View>

//           <TouchableOpacity onPress={handleForgotPassword}>

//             <Text style={authStyles.forgotPasswordText}>Forgot Password?</Text>

//           </TouchableOpacity>
        
//         </View>

//         <View style={{flexDirection:'row', justifyContent:'space-between',
//            alignContent:'center', marginBottom:10}}>

//           <View style={{marginBottom:12, borderBottomWidth:1, width:90 }}></View>

//           <Text style={{fontFamily:'PoppinsRegular', fontSize: 18}}>or login with</Text>

//           <View style={{borderBottomWidth:1, marginBottom:12, width:90 }}></View>


//         </View>


//        <View style={{flexDirection:'row', resizeMode:'contain', 
//         alignItems:'center', justifyContent:'center'}}>


//         <View>

//           <TouchableOpacity style={authStyles.googleSignInButton} onPress={handleGoogleSignIn}>
//            <Image
//              source={require('@/assets/images/FB.png')}
//             style={authStyles.googleLogo}/>  
//           </TouchableOpacity>
//         </View>

//         <View>

//           <TouchableOpacity style={authStyles.googleSignInButton} onPress={handleGoogleSignIn}>
//            <Image
//              source={require('@/assets/images/GG.png')}
//             style={authStyles.googleLogo}/>  
//           </TouchableOpacity>
//         </View>

//         <View>

//           <TouchableOpacity style={authStyles.googleSignInButton}>
//            <Image
//              source={require('@/assets/images/Apple.png')}
//             style={authStyles.googleLogo}
//             resizeMode='contain' /> 
            
//           </TouchableOpacity>
//         </View>


//         </View>            


//         <View style={authStyles.signUpPrompt}>
//           <Text style={authStyles.signUpText}>Don't have an account?</Text>
//             <TouchableOpacity onPress={handleSignUp}>
//               <Text style={authStyles.signUpLink}>Sign Up</Text>
//             </TouchableOpacity>
//         </View>       


         
        
                                        
//       </View>


//     </SafeAreaView>
//   );
// }

// export default login;



//               {/* <View style={styles.Container}>
//          <Text>login</Text>
//          <Button title="Go to Register" onPress={() => router.push('register')} />
//         </View> 
//          <TouchableOpacity style={authStyles.googleSignInButton} onPress={handleGoogleSignIn}>
//           {/* <Image
//              source={require('@/assets/images/google-logo.png')} // You'll need to add Google logo here
//             style={styles.googleLogo}
//           />  </TouchableOpacity>*/}
          