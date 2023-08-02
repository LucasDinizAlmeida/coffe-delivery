import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";

export function CartHeader() {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign 
                    name="arrowleft" 
                    size={24} 
                    color="black"
                />
            </TouchableOpacity>
            <View
                style={styles.titleContainer}
            >
                <Text style={styles.title}>
                    Carrinho
                </Text>

            </View>
        </View>
    )
}