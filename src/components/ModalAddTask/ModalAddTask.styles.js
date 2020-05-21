import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
    },
    headerModal: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'center',
        backgroundColor: 'rgb(37, 37, 38)',
    },
    modal: {
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '80%',
        paddingBottom: 10,
        borderWidth: .5,
        borderColor: 'black',
    },
    titleModal: {
        color: 'rgb(203, 203, 203)',
    },
    viewInput: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    input: {
        borderColor: 'grey',
        flex: .98,
        borderBottomWidth: 1,
        color: 'black',
    },
    date: {
        color: 'black',
    },
    button: {
        paddingTop: 10,
        marginHorizontal: '25%',
    },
});