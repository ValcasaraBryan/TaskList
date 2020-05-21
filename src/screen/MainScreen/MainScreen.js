import React from 'react';
import {
    View
    } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './MainScreen.styles';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import ModalAddTask from '../../components/ModalAddTask/ModalAddTask';

import t from '../../translate/en';

class MainScreen extends React.PureComponent {
    constructor(props) {
        super(props);
        this.retrieveData();
        this.state = {
            taskIds: [],
            taskById: {},
            modalIsVisible: false,
            buttonType: 'add',
            idSelection: [],
            selection: false,
        };
        this.buttonHeader = {
            add: {label: t('addNew'), action: this.changeOverviewModal},
            selection: {label: t('selectAll'), action: this.selectAllTask},
            unselect: {label: t('unselectAll'), action: this.unselectAllTask},
        };
    };

    storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'taskIds', JSON.stringify(this.state.taskIds),
            );
            await AsyncStorage.setItem(
                'taskById', JSON.stringify(this.state.taskById),
            );
        } catch (error) {
            // Error saving data
        };
    };

    retrieveData = async () => {
        try {
            const taskIds = await AsyncStorage.getItem('taskIds') || [];
            const taskById = await AsyncStorage.getItem('taskById') || {};
            this.setState({ taskIds: JSON.parse(taskIds), taskById: JSON.parse(taskById) });
        } catch (error) {
            // Error retrieving data
        };
    };

    updateData = async (data, key) => {
        try {
            await AsyncStorage.setItem(
                key, JSON.stringify(data),
            );
        } catch (error) {
            // Error saving data
        };
    };

    removeData = async () => {
        const taskById = this.state.taskById;
        const taskIds = this.state.taskIds.filter(id => {
            const selected = this.state.idSelection.find(select => select === id);
            delete taskById[selected]
            return (id !== selected)
        });
        this.setState({ taskIds, taskById, buttonType: 'add', selection: false, idSelection: [] });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.taskIds.length !== this.state.taskIds.length) {
            this.storeData();
        } else if (this.state.idSelection.length === this.state.taskIds.length && this.state.selection) {
            this.setState({ buttonType: 'unselect'});
        } else if (this.state.idSelection.length < this.state.taskIds.length && this.state.selection) {
            this.setState({ buttonType: 'selection'});
        } else if (!this.state.selection) {
            this.setState({ buttonType: 'add'});
        };
    };

    changeOverviewModal = () => this.setState({ modalIsVisible: !this.state.modalIsVisible });

    selectAllTask = () => {
        this.setState({ idSelection: this.state.taskIds });
    };

    unselectAllTask = () => {
        this.setState({ idSelection: [] });
    };

    onSubmitNewTask = (newTask) => {
        const id = this.state.taskIds.reduce((acc, curr) => {
            return (curr > acc) ? curr : acc;
        }, 0) + 1;
        this.setState({
            taskById: { ...this.state.taskById, [id]: newTask },
            taskIds: [id, ...this.state.taskIds]
        });
    };

    onPress = (taskId) => {
        if (this.state.selection) {
            if (this.state.idSelection.find(id => taskId === id)) {
                this.setState({ idSelection: this.state.idSelection.filter(id => id !== taskId)});
            } else {
                this.setState({ idSelection: [...this.state.idSelection, taskId]});
            };
        };
    };

    removeTask = () => {
        this.removeData();
    };

    onLongPress = (taskId) => {
        this.setState({ selection: !this.state.selection, idSelection: this.state.selection ? [] : [taskId] });
    };

    onClickCheck = (taskId) => {
        this.setState(
            { taskById: { 
                ...this.state.taskById,
                [taskId]: {
                    ...this.state.taskById[taskId],
                    check: !this.state.taskById[taskId].check
                }
            } },
            () => this.updateData(this.state.taskById, 'taskById')
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Header
                    title={t('taskList')}
                    labelButton={this.buttonHeader[this.state.buttonType].label}
                    onPress={this.buttonHeader[this.state.buttonType].action}
                    onPressRemove={this.removeTask}
                    buttonIsVisible={true}
                    buttonRemoveIsVisible={this.state.idSelection.length > 0}/>
                <List
                    taskIds={this.state.taskIds}
                    taskById={this.state.taskById}
                    getTask={this.getTask}
                    onPress={this.onPress}
                    onClickCheck={this.onClickCheck}
                    onLongPress={this.onLongPress}
                    idSelection={this.state.idSelection}
                    selection={this.state.selection}/>
                <ModalAddTask
                    isVisible={this.state.modalIsVisible}
                    title={t('addNewTask')}
                    onPress={this.changeOverviewModal}
                    onSubmit={this.onSubmitNewTask}/>
            </View>
        );
    };
};

export default MainScreen;