import React from 'react';
import {
    SafeAreaView,
    View,
    Text
    } from 'react-native';

import styles from './Header.styles';
import Button from '../Button/Button';

import t from '../../translate/en';

class Header extends React.PureComponent {
    render() {
        const { title, labelButton, onPress, buttonIsVisible, buttonRemoveIsVisible, onPressRemove } = this.props;
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text>{title}</Text>
                    <View style={styles.button}>
                        <Button isVisible={buttonIsVisible} label={labelButton} onPress={onPress}/>
                        <Button isVisible={buttonRemoveIsVisible} label={t("remove")} onPress={onPressRemove}/>
                    </View>
                </View>
            </SafeAreaView>
        );
    };
};

export default Header;