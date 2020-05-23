//PersonList reducer

import { PERSON_LIST_DELETE_PERSON_FROM_STORE } from './actions'
import { PERSON_LIST_CHANGE_PERSON_IN_SORE } from './actions';
import { IActions } from '../../interfaces';


const defaultState = {
    listOfPerson: []
}

export const personListReducer = (state = defaultState, action: IActions) => {
    console.log(state);

    switch (action.type) {
        case PERSON_LIST_DELETE_PERSON_FROM_STORE:
            let newListOfPerson = state.listOfPerson.slice();
            newListOfPerson.splice(action.payload, 1);
            return {
                ...state, listOfPerson: newListOfPerson
            }
        case PERSON_LIST_CHANGE_PERSON_IN_SORE:
            return {
                ...state, listOfPerson: action.payload
            }
        default:
            return state
    }

}