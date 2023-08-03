import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { THEME } from "../../styles/theme";

interface Props {
    amount: string,
    trash?: boolean
}

export function Counter({ amount, trash = true}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.button}>
                    <AntDesign 
                        name="plus" 
                        size={24} 
                        color={THEME.COLORS.BRAND_PURPLE_DARK} />
                </TouchableOpacity>
               
                <View style={styles.amount}>
                    <Text style={styles.amountText}>
                        {amount}
                    </Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <AntDesign 
                        name="minus" 
                        size={24} 
                        color={THEME.COLORS.BRAND_PURPLE_DARK} />
                </TouchableOpacity>

                {
                    trash &&
                    <View style={styles.trashContainer}>
                        <Ionicons 
                            name="md-trash-sharp" 
                            size={24} 
                            color={THEME.COLORS.BRAND_PURPLE_DARK} 
                        />
                    </View>    
                }
            </View>
        </View>
    )
}