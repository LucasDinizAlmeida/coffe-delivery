import { View, Text } from "react-native";
import { styles } from "./styles";
import Motoboy from '../../assets/Illustration.svg'
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";
import { useEffect } from "react";

export function Finish() {

    const { navigate } = useNavigation<AppNavigatorRoutesProps>()

    const scale = useSharedValue(0)
    const scaleMotoboy = useSharedValue(0)

    const motoboyAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateX: interpolate(
                    scaleMotoboy.value,
                    [0, 1],
                    [-300, 0],
                    Extrapolate.CLAMP
                )
            }]
        }
    })

    const buttonAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: scale.value
        }
    })

    useEffect(() => {
        scaleMotoboy.value = withTiming(1, { duration: 800, easing: Easing.bounce })
        scale.value = withDelay(500, withTiming(1, { duration: 500 }))
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View style={motoboyAnimatedStyle}>
                <Motoboy/>
            </Animated.View>

            <Animated.View style={[buttonAnimatedStyle, { width: '100%'}]}>
                <View style={styles.message}>
                    <Text style={styles.title}>
                        Uhul! Pedido confirmado
                    </Text>
                    <Text style={styles.subtitle}>
                        Agora é só aguardar que o café{'\n'}
                        chegará até você!
                    </Text>
                </View>

                <View style={styles.button}>
                    
                    <Button 
                        onPress={() => navigate('home')}
                        title="IR PARA A HOME"
                    />
                    
                </View>
            </Animated.View>

        </View>
    )
}