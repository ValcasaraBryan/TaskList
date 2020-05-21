import React from 'react';
import {
    Modal,
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    KeyboardAvoidingView,
    Dimensions
    } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './ModalAddTask.styles';
import Button from '../Button/Button';

import t from '../../translate/en';
const height = Dimensions.get('window').height;

class ModalAddTask extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            task : {
                value: "",
                date: new Date(),
                check: false,
            },
            bottom: 0,
        };
    };

    onChangeText = (text) => {
        this.setState({ task: { ...this.state.task, value: text } });
    };

    onSubmit = () => {
        if (this.state.task.value.length > 0) {
            this.props.onSubmit(this.state.task);
            this.onClose();
        };
    };

    onClose = () => {
        this.setState({ task: { ...this.state.task, value: ""} });
        this.props.onPress();
    };

    onLayout = ({nativeEvent}) => {
        this.setState({ bottom: height - nativeEvent.layout.width });
    };

    onChangeDate = (event, date) => {
        this.setState({ task: { ...this.state.task, date: date} });
    };

    render() {
        const { isVisible, title } = this.props;
        return (
            <KeyboardAvoidingView onLayout={this.onLayout}>
                <Modal visible={isVisible} transparent={true}>
                    <TouchableWithoutFeedback onPress={this.onClose}>
                        <View style={[styles.container, {paddingBottom: this.state.bottom}]}>
                            <TouchableWithoutFeedback>
                                <View style={styles.modal}>
                                    <View style={styles.headerModal}>
                                        <Text style={styles.titleModal}>{title}</Text>
                                    </View>
                                    <View style={styles.viewInput}>
                                        <Text>{t('title')}</Text>
                                        <TextInput value={this.state.task.value} onBlur={this.onSubmit} onChangeText={this.onChangeText} style={styles.input} autoFocus={true} />
                                    </View>
                                    <DateTimePicker
                                        style={styles.date}
                                        value={this.state.task.date}
                                        onChange={this.onChangeDate}/>
                                    <View style={styles.button}>
                                        <Button isVisible={true} label={t("submit")} onPress={this.onSubmit} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </KeyboardAvoidingView>
        );
    };
};

export default ModalAddTask;