import { Text, TouchableOpacity } from "react-native";
import COLORS from '../constants/Colors'
const Button =({text, onPress})=>{
    return(
        
        <TouchableOpacity onPress={onPress} style={{height:60, 
            backgroundColor:COLORS.primary, 
             borderRadius:15,
            justifyContent:'center'}}>
           
            <Text style={{textAlign:'center', 
                color:COLORS.white,
                fontFamily:'PoppinsBold', 
            fontSize:20, fontWeight:400}}>{text}</Text>
        </TouchableOpacity>
    
    )


}
export default Button;