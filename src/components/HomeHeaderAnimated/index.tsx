import { TouchableOpacity, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";

interface Props {
    handleNavigateCart: () => void
    scrollyValue: number
}

export function HomeHeaderAnimated({ handleNavigateCart, scrollyValue }: Props) {

    const fixedProgressBarStyle = useAnimatedStyle(() => {
        return {
          position: 'absolute',
          zIndex: 1,
          opacity: interpolate(
           scrollyValue,
            [0, 200],
            [0, 1],
            Extrapolate.CLAMP
          ),
          transform: [
            { 
              translateY: interpolate(
               scrollyValue,
                [0, 200],
                [-40, 0],
                Extrapolate.CLAMP
              )
            }
          ]
        }
      })

    return (
        <Animated.View style={[styles.container, fixedProgressBarStyle]}>
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

            <TouchableOpacity onPress={handleNavigateCart}>
                <AntDesign 
                    name="shoppingcart" 
                    size={24} 
                    color={THEME.COLORS.BRAND_YELLOW_DARK} 
                />
            </TouchableOpacity>
        </Animated.View>
    )
}