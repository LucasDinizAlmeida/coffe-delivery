import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import coffePng from '../../assets/coffe01.png'

export function CatalogCard() {

    return (
        <View style={styles.container}>
           <Image 
                style={{ marginRight: 8, marginTop: -55 }}
                source={coffePng}
           />

           <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                    Expresso Tradicional
                </Text>

                <Text style={styles.description}>
                    O tradicional café feito com água quente e grãos moídos
                </Text>
                <Text style={styles.price}>
                    R$ 9,90
                </Text>
           </View>
        </View>
    )
}