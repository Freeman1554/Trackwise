import { Text, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/Colors';
import Button from '../../components/Button';
import  {router}  from 'expo-router'

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text style={{color:COLORS.primary}}>Hello</Text>




      <Button onPress={()=>{
                router.navigate('/account')
            }} 
       text={'SignIn'}/>
     
    </SafeAreaView>
  );
}
export default SignIn