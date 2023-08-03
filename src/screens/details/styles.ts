import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.GREY_100
    },
    detailsContent: {
        width: '100%',
        paddingHorizontal: 32
    },
    typeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: 100,
        backgroundColor: THEME.COLORS.GREY_200,
        borderRadius: 100
    },
    typeText: {
        color: THEME.COLORS.WHITE
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 12
    },
    name: {
        color: THEME.COLORS.WHITE,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 24
    },
    price: {
        color: THEME.COLORS.BRAND_YELLOW_DARK,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 36
    },
    description: {
        color: THEME.COLORS.GREY_500,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 16,
        marginTop: 20
    },
    // imageContainer: { 
    //     flexWrap: 'nowrap', 
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginBottom: -50,
    //     paddingHorizontal: 32, 
    //     backgroundColor: 'red',
    // },

    footer: {
        marginTop: 'auto',
        width: '100%',
        paddingHorizontal: 32,
        paddingTop: 40,
        paddingBottom: 32,
        backgroundColor: THEME.COLORS.GREY_900
    },
    selectVolume: {
        color: THEME.COLORS.GREY_400,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 14
    },
    volumeContainerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    volumeContainer: {
        width: 100,
        height: 40,
        backgroundColor: THEME.COLORS.GREY_700,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    volumeText: {
        color: THEME.COLORS.GREY_300,
        fontFamily: THEME.FONTS.REGULAR,
        fontSize: 14
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        padding: 8,
        backgroundColor: THEME.COLORS.GREY_700,
        borderRadius: 6
    },
    button: {
        padding: 12,
        marginLeft: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: THEME.COLORS.BRAND_PURPLE_DARK
    },
    titleButton: {
        color: THEME.COLORS.WHITE,
        fontSize: 14,
        fontFamily: THEME.FONTS.BOLD
    }
})