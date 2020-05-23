//PersonForm reducers

import { PERSON_FORM_FIRST_NAME_CHANGE } from './actions';
import { PERSON_FORM_LAST_NAME_CHANGE } from './actions';
import { PERSON_FORM_AGE_CHANGE } from './actions';
import { PERSON_FORM_EMAIL_CHANGE } from './actions';
import { IActions } from '../../interfaces';

const defaultState = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
}

export const personFormReducer = (state = defaultState, action: IActions) => {
    // console.log(state);
    switch (action.type) {
        case PERSON_FORM_FIRST_NAME_CHANGE:
            return {
                ...state, firstName: action.payload
            }
        case PERSON_FORM_LAST_NAME_CHANGE:
            return {
                ...state, lastName: action.payload
            }
        case PERSON_FORM_AGE_CHANGE:
            return {
                ...state, age: action.payload
            }
        case PERSON_FORM_EMAIL_CHANGE:
            return {
                ...state, email: action.payload
            }
        default:
            return state;
    }
}

