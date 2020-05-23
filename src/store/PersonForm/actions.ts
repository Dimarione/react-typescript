//PersonForm actions

import {IActions} from "../../interfaces";

export const PERSON_FORM_FIRST_NAME_CHANGE = 'PERSON_FORM_FIRST_NAME_CHANGE';
export const PERSON_FORM_LAST_NAME_CHANGE = 'PERSON_FORM_LAST_NAME_CHANGE';
export const PERSON_FORM_AGE_CHANGE = 'PERSON_FORM_AGE_CHANGE';
export const PERSON_FORM_EMAIL_CHANGE = 'PERSON_FORM_EMAIL_CHANGE';

export const setFirstNameText = (firstName: string): IActions<string> => (
    {
        type: PERSON_FORM_FIRST_NAME_CHANGE,
        payload: firstName,
    }
)
export const setLastNameText = (lastName: string): IActions<string> => (
    {
        type: PERSON_FORM_LAST_NAME_CHANGE,
        payload: lastName,
    }
)
export const setAgeText = (age: string): IActions<string> => (
    {
        type: PERSON_FORM_AGE_CHANGE,
        payload: age,
    }
)
export const setEmailText = (email: string): IActions<string> => (
    {
        type: PERSON_FORM_EMAIL_CHANGE,
        payload: email,
    }
)
