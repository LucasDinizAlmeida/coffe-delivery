import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 208,
        height: 262,
        marginRight: 32,
        paddingHorizontal: 16,
        backgroundColor: THEME.COLORS.GREY_800,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    typeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 100,
        backgroundColor: THEME.COLORS.BRAND_PURPLE_LIGHT,
        borderRadius: 100,

        marginTop: 12
    },
    typeText: {
        color: THEME.COLORS.BRAND_PURPLE_DARK,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 10
    },
    name: {
        color: THEME.COLORS.GREY_200,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 20,
        marginTop: 18
    },
    description: {
        color: THEME.COLORS.GREY_400,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 12,
        marginTop: 4,
        textAlign: 'center'
    },
    price: {
        color: THEME.COLORS.BRAND_YELLOW_DARK,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 24,
        marginTop: 18
    }
})