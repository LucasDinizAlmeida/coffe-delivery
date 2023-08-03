import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../styles/theme";

interface Props extends TouchableOpacityProps {
    title: string
    selectColor?: 'yellow' | 'purple'
}

export function Button({ title, selectColor = 'purple', ...rest}: Props) {

    return (
        <TouchableOpacity
            style={[
                styles.container, 
                { backgroundColor: selectColor === 'purple'? THEME.COLORS.BRAND_PURPLE_DARK : THEME.COLORS.BRAND_YELLOW_DARK}
            ]}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}