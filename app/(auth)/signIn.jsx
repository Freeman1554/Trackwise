import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../../constants/Colors';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const signIn = () => {
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const handleSignIn = () => {
    console.log('Sign In pressed!');
    console.log('Email/Phone:', emailPhone);
    console.log('Password:', password);
    console.log('Agreed to Terms:', agreeToTerms);
    // Add your sign-in logic here (e.g., API call)
  };

  const handleGoogleSignIn = () => {
    console.log('Sign In with Google pressed!');
    // Add your Google sign-in logic here
  };

  const handleSignUp = () => {
    // Navigate to sign-up screen
    console.log('Navigating to Sign Up');
  };

  const handleForgotPassword = () => {
    // Navigate to forgot password screen
    console.log('Navigating to Forgot Password');
  };


  const router = useRouter();
  const navigation = useNavigation();

  return(

    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}

        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/trackwise.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.header}>

          <Text style={{fontFamily:'PoppinsBold', fontSize:23,
            fontWeight:600, color:COLORS.white}}>Welcome to TrackWise</Text>
            
          <Text style={{fontFamily:'PoppinsRegular',
          fontSize:17, fontWeight:400}}>Let’s help you meet your tasks!</Text>
        </View>

        

        <View style={styles.formContainer}>
         <Text style={styles.inputLabel}>Sign Up <Text style={{fontSize: 16}}>in few seconds</Text> </Text>
          
          <View style={styles.inputWrapper}>
            
            <FontAwesome5 name="envelope" size={24} color="black" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={emailPhone}
              onChangeText={setEmailPhone}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            
            <FontAwesome5 name="envelope" size={24} color="black" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={emailPhone}
              onChangeText={setEmailPhone}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.inputLabel}>Password</Text>

          <View style={styles.inputWrapper}>
            
            <FontAwesome5 name="lock" size={24} color="black" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}/>

              <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.passwordVisibilityToggle}
            >
              <FontAwesome5
                name={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color="#F58634"
              />
              
            </TouchableOpacity>
          </View>

          <View style={styles.termsAndForgot}>
            <View style={styles.checkboxContainer}>
              {/* <Checkbox
                value={agreeToTerms}
                onValueChange={setAgreeToTerms}
                color={agreeToTerms ? '#FFA500' : '#4630EB'} // Example color, adjust as needed
                style={styles.checkbox}
              />

              <FontAwesome5 name="check-square" size={24} color="black" /> */}
              <TouchableOpacity
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              style={styles.checkbox}
            >
              <FontAwesome5
                          
                name={agreeToTerms ? 'check-square' : 'square'}
                size={20}
                color="#fff"
                style={styles.checkbox}
              />
              </TouchableOpacity>

              <Text style={styles.termsText}>I agree to Terms & Conditions</Text>
            </View>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.signUpPrompt}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpLink}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.googleSignInContainer}>
           <TouchableOpacity style={styles.googleSignInButton} onPress={handleGoogleSignIn}>
             {/* <Image
               source={require('@/assets/images/google-logo.png')} // You'll need to add Google logo here
                style={styles.googleLogo}
             /> */}
             <Text style={styles.googleSignInButtonText}>Sign In with Google</Text>
           </TouchableOpacity>
          </View>

        </View>

        



       {/* <View style={styles.Container}>
         <Text>login</Text>
         <Button title="Go to Register" onPress={() => router.push('register')} />
        </View> */}



      </ScrollView>
  
    </SafeAreaView>
  );
}

export default signIn;




const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.primary
  },
  Container: {
    marginTop: 60,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap:8
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 700,
    color: COLORS.white,
    fontFamily: 'PoppinsBold'
  },
  logoContainer: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 116, 
    height: 93,
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.white, 
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    padding: 40,
    paddingTop: 30,
    height: '100%',
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 15,
    fontFamily:'PoppinsMedium'
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  passwordVisibilityToggle: {
    padding: 10,
  },
  termsAndForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 3,
    borderRadius: 4,
    backgroundColor: '#00A859',
    width: 20,
    height: 20,
  },
  termsText: {
    color: '#fff',
    fontSize: 11,
  },
  forgotPasswordText: {
    color: '#FFF', 
    fontSize: 11,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#F58634', // Orange color for Sign In button
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 5,
  },
  signUpLink: {
    color: '#fff', // Yellowish color for "Sign up" link
    fontSize: 14,
    fontWeight: 'bold',
  },
  googleSignInContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  googleSignInButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // White background for Google button
    borderRadius: 8,
    paddingVertical: 15,
    marginVertical: 40,
    justifyContent: 'center',
    shadowColor: '#000',
    width: '100%',
  },
  googleLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleSignInButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
})