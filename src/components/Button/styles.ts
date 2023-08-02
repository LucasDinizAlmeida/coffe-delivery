import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: THEME.COLORS.BRAND_PURPLE_DARK
    },
    title: {
        color: THEME.COLORS.WHITE,
        fontSize: 14,
        fontFamily: THEME.FONTS.BOLD
    }
})