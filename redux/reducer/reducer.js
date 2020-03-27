import {combineReducers} from 'redux';
import isAddingReducer from './isAddingReducer';
import filterDisplayReducer from './filterDisplayReducer';
import arrTodosReducer from './arrTodosReducer';

const reducer = combineReducers({
    arrTodos:arrTodosReducer,
    filterDisplay:filterDisplayReducer,
    adding:isAddingReducer
});
export default reducer;