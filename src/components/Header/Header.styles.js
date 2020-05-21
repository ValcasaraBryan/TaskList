import { StyleSheet } from 'react-native';

const backgroundColor = {
    backgroundColor: 'grey',
};

export default StyleSheet.create ({
    safeArea: {
        ...backgroundColor,
    },
    container: {
        ...backgroundColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5,
        minHeight: 47,
    },
    button: {
        flexDirection: 'row',
    },
});