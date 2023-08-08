import { View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useEffect } from "react";
import LogoSvg  from '../../assets/logo.svg'
import LogoNameSvg  from '../../assets/logo-name.svg'

export function Splash() {
    
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    const splashAnimation = useSharedValue(0)
  
    const brandStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateX: interpolate(splashAnimation.value,
              [0, 50],
              [0, -50],
              Extrapolate.CLAMP
            )
          }
        ]
      }
  
    })
  
    const logoNameStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(splashAnimation.value,
          [0, 50],
          [0, 1]
        ),
        transform: [
          {
            translateX: interpolate(splashAnimation.value,
              [0, 50],
              [90, 30],
              Extrapolate.CLAMP
            )
          }
        ]
      }
    })
  
    function handleOpenHome() {
      navigation.navigate('home')
    }
  
    useEffect(() => {
      splashAnimation.value = withTiming(
        50,
        { duration: 1000 },
        () => {
          'worklet'
          runOnJS(handleOpenHome)()
        }
      )
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View style={[brandStyle, { position: 'absolute' }]}>
                <LogoSvg />
            </Animated.View>

            <Animated.View style={[logoNameStyle, { position: 'absolute' }]}>
                <LogoNameSvg  />
            </Animated.View>
        </View>
    )
}