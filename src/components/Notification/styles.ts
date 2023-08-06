import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 32,
        paddingVertical: 28,
        backgroundColor: THEME.COLORS.GREY_600,
        opacity: 0.7,
        position: 'absolute',
        bottom: 0
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: THEME.FONTS.BOLD,
        fontSize: 14,
        color: THEME.COLORS.GREY_100
    }
})