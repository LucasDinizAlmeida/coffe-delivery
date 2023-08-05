import { Image, View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import coffePng from '../../assets/coffe01.png'

interface Props extends TouchableOpacityProps {
    data: {
        id: string;
        type: string;
        name: string;
        price: string;
        description: string;
        image: string;
    }
}

export function CardPromotion({ data, ...rest }: Props) {

    const {type, name, description, price } = data

    return (
        <TouchableOpacity 
            {...rest}
        >
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
                    <Text style={styles.typeText}>{type}</Text>
                </View>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
                <Text style={styles.price}>
                    {price}
                </Text>
            </View>

            </TouchableOpacity>
    )
}