import {IActions, IPerson} from "../../interfaces";

export const PERSON_LIST_DELETE_PERSON_FROM_STORE = 'PERSON_LIST_DELETE_PERSON_FROM_STORE';
export const PERSON_LIST_CHANGE_PERSON_IN_SORE = 'PERSON_LIST_CHANGE_PERSON_IN_SORE';
//saga
export const PERSON_LIST_LOAD_DATA = 'PERSON_LIST_LOAD_DATA';
export const PERSON_LIST_UPLOAD_DATA = 'PERSON_LIST_UPLOAD_DATA';

export const deletePerson = (id: number): IActions<number> => (
    {
        type:PERSON_LIST_DELETE_PERSON_FROM_STORE,
        payload: id,
    }
)

export const changeListOfPerson = (json: string) => (
    {
        type: PERSON_LIST_CHANGE_PERSON_IN_SORE,
        payload: json,
    }
)

export const loadPersonData = () => (
    {
        type: PERSON_LIST_LOAD_DATA,
    }
)

export const uploadPersonData = (person: IPerson, id: number): IActions<{id: number, person: IPerson}> => (
    {
        type: PERSON_LIST_UPLOAD_DATA,
        payload: {
            person: person,
            id: id,
        }
    }
)