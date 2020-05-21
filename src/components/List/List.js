import React from 'react';
import {
    View,
    ScrollView
    } from 'react-native';

import styles from './List.styles';
import Task from '../Task/Task';

class List extends React.PureComponent {

    render() {
        const { taskIds, taskById, idSelection, onPress, onClickCheck } = this.props;
        return (
            <ScrollView style={styles.container} bounces={false}>
                {taskIds.map((taskId, index) => {
                    const isSelected = idSelection.find(id => id === taskId) ? true : false;
                    return (
                        <View key={taskId}>
                            {index > 0 && <View style={styles.separator}></View>}
                            <Task
                                onLongPress={() => this.props.onLongPress(taskId)}
                                onPress={() => onPress(taskId)}
                                task={taskById[taskId]}
                                onClickCheck={() => onClickCheck(taskId)}
                                selection={this.props.selection}
                                isSelected={isSelected}/>
                        </View>                    
                    );
                })}
            </ScrollView>
        );
    };
};

export default List;