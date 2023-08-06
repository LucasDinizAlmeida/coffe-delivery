import { Pressable, Text, PressableProps } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

interface Props extends PressableProps {
    title: string
    isChecked: boolean
}

export function FilterButton({ title, isChecked, ...rest}: Props) {

    const BACKGROUND_COLOR = isChecked? THEME.COLORS.BRAND_PURPLE : 'transparent'
    const COLOR = isChecked? 'white' : THEME.COLORS.BRAND_PURPLE 

    return (
        <Pressable 
            style={[styles.container, { backgroundColor: BACKGROUND_COLOR}]}
            {...rest}
        >
            <Text 
                style={[styles.typeText, { color: COLOR}]}
            >
                {title}
            </Text>
        </Pressable>
)
}