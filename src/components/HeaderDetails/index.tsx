import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";

export function HeaderDetails() {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign 
                    name="arrowleft" 
                    size={24} 
                    color="#ffffff"
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <AntDesign name="shoppingcart" size={24} color="#ffffff" />
            </TouchableOpacity>
        </View>
    )
}