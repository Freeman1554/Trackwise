import { Text, TouchableOpacity } from "react-native";
import COLORS from '../constants/Colors'
const Button =({text, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={{height:70, 
         backgroundColor:COLORS.primary, 
         borderRadius:15,
         justifyContent:'center'}}>
           
            <Text style={{textAlign:'center', 
                color:COLORS.white, 
                fontFamily:'PoppinsBold', 
                fontSize:24, fontWeight:700}}>{text}</Text>
        </TouchableOpacity>
    )


}
export default Button;