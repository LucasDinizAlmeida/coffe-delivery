import { Image, View, Text } from "react-native";
import { styles } from "./styles";

import imageCoffe from '../../assets/coffe01.png'
import { Counter } from "../Counter";

export function CoffeCard() {

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image 
                    style={styles.imageContainer}
                    source={imageCoffe}
                />

                <View style={styles.content}>
                    <Text style={styles.textName}>
                        Irlandês
                    </Text>
                    <Text style={styles.textVolume}>
                        270ml
                    </Text>
                    <Counter amount="1"/>
                </View>
            </View>

            <Text style={styles.textPrice}>
                R$ 9,90
            </Text>
        </View>
    )
}