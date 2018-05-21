import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: '#164845',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchBarContainer: {
        padding: 4,
        backgroundColor: '#164845',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'nabila'
    },
    icon: {
        width: 30,
        height: 30
    },
    input: {
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        height: 40,
        paddingHorizontal: 8,
    }
});

export default styles;
