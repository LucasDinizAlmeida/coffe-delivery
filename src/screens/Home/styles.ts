import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
    containerHeader: {
        width: '100%',
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 1,
        top: 32,
        paddingVertical: 28,
        paddingHorizontal: 32,
        // marginTop: 44,
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
    },
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.GREY_900,
    },
    content: {
        width: '100%',
        backgroundColor: THEME.COLORS.GREY_100,
        paddingVertical: 137
    },
    searchContainer: {
        width: '100%',
        paddingTop: 38,
        paddingHorizontal: 32,
        marginTop: 20,
    },
    title: {
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 20,
        color: THEME.COLORS.WHITE,
    },
    input: {
        width: '100%',
        marginTop: 15,
        padding: 12,
        backgroundColor: THEME.COLORS.GREY_200,
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 14,
        color: THEME.COLORS.WHITE,
        borderRadius: 4
    },
    filterContainer: {
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 32,
        marginTop: 40
    },
    filterTitle: {
        fontFamily: THEME.FONTS.BOLD_BALOO_DA_2,
        fontSize: 16,
        color: THEME.COLORS.GREY_300,
    },
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 12
    },
    filterButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: THEME.COLORS.BRAND_PURPLE,
        borderRadius: 100,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    typeText: {
        color: THEME.COLORS.BRAND_PURPLE,
        fontFamily: THEME.FONTS.BOLD,
        fontSize: 10
    },
    itemsList: {
        flexGrow: 1,
        padding: 32
    },
})