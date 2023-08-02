import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.GREY_900,
        padding: 64
    },
    message: {
        alignItems: 'center',
        marginTop: 47
    },
    title: {
        color: THEME.COLORS.BRAND_YELLOW_DARK,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 24,
    },
    subtitle: {
        color: THEME.COLORS.GREY_200,
        fontFamily: THEME.FONTS.REGULAR,
        textAlign: 'center',
        fontSize: 14,
        marginTop: 8
    },
    button: {
        width: '100%',
        marginTop: 64
    }
})