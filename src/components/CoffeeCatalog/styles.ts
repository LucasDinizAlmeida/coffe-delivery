import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        // paddingHorizontal: 32,
        marginBottom: 48
    },
    title: {
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 14,
        color: THEME.COLORS.GREY_400,
    }
})