import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.GREY_900
    },
    itemsList: {
        flexGrow: 1,
        padding: 32
    },
    footer: {
        paddingHorizontal: 32,
        paddingVertical: 40,
        borderTopWidth: 0.6,
        borderColor: THEME.COLORS.GREY_500
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 23
    },
    totalTitle: {
        color: THEME.COLORS.GREY_200,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 16
    },
    totalCount: {
        color: THEME.COLORS.GREY_100,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 20
    }
})