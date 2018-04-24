import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'white',
        marginVertical: 4,
        height: 40,
        width: width - 16,
        borderRadius: 8,
        paddingHorizontal: 16
    },
    button: {
        width: width / 2,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 8,
        borderTopRightRadius: 16,
        borderBottomLeftRadius: 16,
    },
    text: {
        color: 'white'
    },
});