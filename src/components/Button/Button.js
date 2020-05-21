import React from 'react';
import {
    Text,
    TouchableOpacity
    } from 'react-native';

import styles from './Button.styles';

class Button extends React.PureComponent {
    render () {
        const { label, onPress, isVisible } = this.props;
        if (!isVisible) return null;
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>
                <Text>{label}</Text>
            </TouchableOpacity>
        );
    };
};

export default Button;