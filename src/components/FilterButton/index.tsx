import { Pressable, Text, PressableProps } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";
import Animated, { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useEffect } from "react";

interface Props extends PressableProps {
    title: string
    isChecked: boolean
}

const PressableAnimated = Animated.createAnimatedComponent(Pressable)

export function FilterButton({ title, isChecked, ...rest}: Props) {

    const COLOR = THEME.COLORS.BRAND_PURPLE

    const scale = useSharedValue(1)
    const checked = useSharedValue(1)

    const animatedContainerStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            backgroundColor: interpolateColor(
                checked.value,
                [0, 1],
                ['transparent', COLOR]
              )
        }
    })

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
          color: interpolateColor(
            checked.value,
            [0, 1],
            [COLOR, THEME.COLORS.WHITE]
          )
        }
      })

    function onPressIn() {
        scale.value = withTiming(1.15, { duration: 300, easing: Easing.bounce })
    }
    function onPressOut() {
        scale.value = withTiming(1, { duration: 300, easing: Easing.bounce })
    }

    useEffect(() => {
        checked.value = isChecked? 1 : 0
    }, [isChecked])

    return (
        <PressableAnimated 
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={[styles.container, animatedContainerStyle]}
            {...rest}
        >
            <Animated.Text
                style={[styles.typeText, animatedTextStyle]}
            >
                {title}
            </Animated.Text>
        </PressableAnimated>
)
}