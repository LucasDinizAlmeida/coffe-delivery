import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: THEME.COLORS.BRAND_PURPLE,
        borderRadius: 100,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    typeText: {
        // color: THEME.COLORS.BRAND_PURPLE,
        fontFamily: THEME.FONTS.BOLD,
        fontSize: 10
    }
})