import { Image, View, Text } from "react-native";
import { styles } from "./styles";

import imageCoffe from '../../assets/coffe01.png'
import { Counter } from "../Counter";
import { CoffeCartItemProps } from "../../data/cartData";

interface Props {
    data: CoffeCartItemProps
    removeItem: () => void
}

export function CoffeCard({data, removeItem}: Props) {
    const { id, name, amount, price, volume} = data



    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Image 
                    style={styles.imageContainer}
                    source={imageCoffe}
                />

                <View style={styles.content}>
                    <Text style={styles.textName}>
                        {name}
                    </Text>
                    <Text style={styles.textVolume}>
                        {volume}
                    </Text>
                    <Counter 
                        amount={amount}
                        removeItem={removeItem}
                    />
                </View>
            </View>

            <Text style={styles.textPrice}>
                {price}
            </Text>
        </View>
    )
}