import { Image, View, Text } from "react-native";
import { styles } from "./styles";
import coffePng from '../../assets/coffe01.png'

export function CardPromotion() {

    return (
        <View>
            <View 
                style={{ flex: 1, height: 50 } }
            />
            <View style={styles.container}>
                <View style={{ top: -50, position: 'absolute'}}>
                    <Image 
                        source={coffePng}
                    />

                </View>
                <View style={styles.typeContainer}>
                    <Text style={styles.typeText}>TRADICIONAL</Text>
                </View>
                <Text style={styles.name}>
                    Latte
                </Text>
                <Text style={styles.description}>
                    Café expresso com o dobro de leite e espuma cremosa
                </Text>
                <Text style={styles.price}>
                    R$ 9,90
                </Text>
            </View>

        </View>
    )
}