import {combineReducers} from 'redux';
import {personFormReducer, PersonFormState} from './PersonForm/reducers';
import {personListReducer, PersonListState} from './PersonList/reducers';

export default combineReducers({
    personForm: personFormReducer,
    personList: personListReducer,
})

export type RootState = {
    personForm: PersonFormState,
    personList: PersonListState,
}