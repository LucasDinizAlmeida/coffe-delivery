import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: THEME.COLORS.GREY_900,
        paddingVertical: 28,
        paddingHorizontal: 32,
        marginTop: 44,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.6,
        borderColor: THEME.COLORS.GREY_500
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 16,
        color: THEME.COLORS.GREY_200
    }
})