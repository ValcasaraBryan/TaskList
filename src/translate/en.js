const lang = {
    undefined: '',
    lang: 'en',
    remove: "Remove",
    unselect: "unselect",
    unselectAll: "Unselect all",
    select: "select",
    selectAll: "Select all",
    add: 'Add',
    addNew: "Add new",
    addNewTask: "Add new task",
    taskList: "Task list",
    submit: "Submit",
    title: "Title",
};

module.exports = (name = 'undefined') => {
    return lang[name];
};