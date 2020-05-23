import {combineReducers} from 'redux';
import {personFormReducer} from './PersonForm/reducers';
import {personListReducer} from './PersonList/reducers';

export default combineReducers({
    personForm: personFormReducer,
    personList: personListReducer,
})