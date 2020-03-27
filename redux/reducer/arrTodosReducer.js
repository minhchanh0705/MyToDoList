const defaultArrTodos =  [
    { id: 1, todo: 'ăn cơm', done: true },
    { id: 2, todo: 'đi ngủ', done: false },
    { id: 3, todo: 'đá banh', done: false },
    { id: 4, todo: 'shopping', done: true },
    { id: 5, todo: 'đi làm', done: true }
];

const arrTodosReducer = (state = defaultArrTodos, action) => {
    if (action.type === 'DONE') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, done: !e.done };
        });
    }
    if (action.type === 'ADD_TODO') {
        return [{
            id: state.length + 1,
            todo: action.todo,
            done: false
        }].concat(state);
    }
    return state;
};
export default arrTodosReducer;