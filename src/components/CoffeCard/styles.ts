import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingVertical: 16
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 64,
        width: 64
    },
    content: {
        marginLeft: 20
    },
    textName: {
        color: THEME.COLORS.GREY_100,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 16
    },
    textVolume: {
        color: THEME.COLORS.GREY_400,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 14
    },
    textPrice: {
        color: THEME.COLORS.GREY_100,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 16
    }
})