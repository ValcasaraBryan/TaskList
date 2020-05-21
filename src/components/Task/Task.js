import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
    } from 'react-native';
import CheckBox from 'react-native-check-box';

import styles from './Task.styles';

var moment = require('moment');

class Task extends React.PureComponent {
    constructor(props) {
        super(props);
        moment.locale('en');
    };

    render() {
        const { task, onLongPress, onPress, onClickCheck, selection, isSelected } = this.props;

        const styleIsSelected = isSelected ? styles.isSelected : styles.isNotSelected;
        const time = moment(Date.parse(task.date)).fromNow();
        return (
            <TouchableOpacity onLongPress={onLongPress} onPress={onPress} activeOpacity={0.6}>
                <View style={styles.container}>
                    <CheckBox
                        onClick={onClickCheck}
                        isChecked={task.check}
                        style={styles.checkBox} />
                    <View style={styles.label}>
                        <Text numberOfLines={2}>{task.value}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text>{time}</Text>
                    </View>
                    {selection && <View style={[styles.selection, styleIsSelected]} />}
                </View>
            </TouchableOpacity>
        );
    };
};

export default Task;