import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";

export function HeaderDetails() {

    const { navigate, goBack } = useNavigation<AppNavigatorRoutesProps>()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goBack()}>
                <AntDesign 
                    name="arrowleft" 
                    size={24} 
                    color="#ffffff"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('cart')}>
                <AntDesign name="shoppingcart" size={24} color="#ffffff" />
            </TouchableOpacity>
        </View>
    )
}