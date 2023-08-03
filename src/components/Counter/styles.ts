import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    content: {
        flexDirection: 'row'
    },
    button: {
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: THEME.COLORS.GREY_500
    },
    amount: {
        width: 28,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountText: {
        color: THEME.COLORS.GREY_100,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 16
    },
    trashContainer: {
        width: 36,
        height: 36,
        marginLeft: 8,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.GREY_700
    }
})