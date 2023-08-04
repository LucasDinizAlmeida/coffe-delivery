import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

export function HeaderHome() {

    return (
        <View style={styles.container}>
            <View style={styles.locationContainer}>
                <Ionicons 
                    name="location-sharp" 
                    size={24} 
                    color={THEME.COLORS.BRAND_PURPLE} 
                />
                <Text style={styles.locationText}>
                    Porto Alegre, RS
                </Text>
            </View>

            <TouchableOpacity>
                <AntDesign 
                    name="shoppingcart" 
                    size={24} 
                    color={THEME.COLORS.BRAND_YELLOW_DARK} 
                />
            </TouchableOpacity>
        </View>
    )
}