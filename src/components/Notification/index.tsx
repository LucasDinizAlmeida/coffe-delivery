import { Pressable, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

export function Notification() {

    return (
        <Pressable style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="cart" size={32} color={THEME.COLORS.BRAND_PURPLE_DARK} />

                <Text style={styles.title}>
                    Item adicionado ao carrinho
                </Text>

                <Feather name="arrow-right" size={32} color={THEME.COLORS.BRAND_PURPLE_DARK} />
            </View>
        </Pressable>
    )
}