import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function CartHeader() {

    const { goBack } = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goBack()}>
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