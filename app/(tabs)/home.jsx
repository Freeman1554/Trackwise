import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../constants/Colors';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text style={{color:COLORS.primaryText}}>Hello Home</Text>
    </SafeAreaView>
  );
}