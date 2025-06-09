import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/Colors';
import Button from '../../components/Button';
import  {router}  from 'expo-router'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={{color:COLORS.primary}}>Hello Home</Text>
     
    </SafeAreaView>
  );
}