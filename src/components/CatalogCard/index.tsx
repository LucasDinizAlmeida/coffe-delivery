import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import coffePng from '../../assets/coffe01.png'
import { CoffesDataProps } from "../../data/coffesData";

interface Props extends TouchableOpacityProps {
    data: CoffesDataProps
}

export function CatalogCard({ data, ...rest }: Props) {

    const { name, descreption, price } = data

    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
           <Image 
                style={{ marginRight: 8, marginTop: -55 }}
                source={coffePng}
           />

           <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                    {name}
                </Text>

                <Text style={styles.description}>
                    {descreption}
                </Text>
                <Text style={styles.price}>
                    {price}
                </Text>
           </View>
        </TouchableOpacity>
    )
}