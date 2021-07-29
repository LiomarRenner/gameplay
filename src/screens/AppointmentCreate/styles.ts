import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select: {
        width: '100%',
        height: 68,
        flexDirection:'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.secondary50,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    image: {
        width: 64,
        height: 68,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: theme.colors.secondary50
    },
    selectBody: {
        flex: 1,
        alignItems: 'center'
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    },
 
})