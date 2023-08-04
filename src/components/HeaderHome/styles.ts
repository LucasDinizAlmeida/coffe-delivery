import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: THEME.COLORS.GREY_100,
        paddingVertical: 28,
        paddingHorizontal: 32,
        marginTop: 44,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    locationContainer: {
        flexDirection: 'row',
        lignItems: 'center',
    },
    locationText: {
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 14,
        color: THEME.COLORS.GREY_900,
        marginLeft: 8
    }
})