import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        backgroundColor: THEME.COLORS.GREY_800,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 32,
        position: 'relative'
    },
    name: {
        color: THEME.COLORS.GREY_200,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 16,
    },
    description: {
        color: THEME.COLORS.GREY_400,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 12,
        marginTop: 4,
        textAlign: 'auto'
    },
    price: {
        color: THEME.COLORS.BRAND_YELLOW_DARK,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 20,
        marginTop: 8
    }
})