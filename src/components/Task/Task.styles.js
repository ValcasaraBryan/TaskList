import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
    container: {
        flex: 1,
        height: 60,
        paddingLeft: 20,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(60, 60, 60, 2)'
    },
    label: {
        flex: 1,
    },
    time: {
        paddingLeft: 10,
    },
    checkBox: {
        paddingRight: 10,
    },
    selection: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    isSelected: {
        backgroundColor: 'black'

    },
    isNotSelected: {
        backgroundColor: 'white'

    },
});