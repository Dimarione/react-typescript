import {
    takeEvery,
    put,
    call
} from 'redux-saga/effects'

import {
    PERSON_LIST_LOAD_DATA,
    PERSON_LIST_UPLOAD_DATA,
    changeListOfPerson,
    deletePerson
} from './store/PersonList/actions';
import { IActions } from './interfaces';

//запрашиваем данные с сервера в виде json фаела
async function fetchDownloadData() {
    try {
        let url = 'https://server-side-form.herokuapp.com/employeeList';
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })

        if (response.ok) {
            let json = await response.json();
            //заносим все пользователей полученых с сервера в массив
            return json;
        } else {
            alert("Ошибка HTTP: " + response.status);
        }

    } catch (error) {
        alert("Нет доступа к серверу");
    }

}
//генератор worker
function* workerLoadPersonData() {
    const json = yield call(fetchDownloadData);
    yield put(changeListOfPerson(json));
}
//генератор watcher
export function* watchLoadPersonData() {
    yield takeEvery(PERSON_LIST_LOAD_DATA, workerLoadPersonData)
}

//----------------

//удаляем пользователя с сервера

async function fetchUploadData(action: IActions) {
    let data = {
        firstName: action.payload.person.firstName,
        lastName: action.payload.person.lastName,
    }
    try {
        let url = "https://server-side-form.herokuapp.com/employee";
        let promise = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })

        if (promise.ok) { // если HTTP-статус в диапазоне 200-299
            // получаем тело ответа (см. про этот метод ниже)
            alert("Удалено из БД");
            //удаляем текущего пользователя из массива пользователей
            return true;
        } else {
            alert("Ошибка HTTP: " + promise.status);
        }

    } catch (error) {
        alert("Нет доступа к серверу");
    }
}

function* workerUploadPersonData(action: IActions) {
    const response = yield call(fetchUploadData, action);
    if (response) {
        yield put(deletePerson(action.payload.id));
    }
}

export function* watchUploadPersonData() {
    yield takeEvery(PERSON_LIST_UPLOAD_DATA, workerUploadPersonData)
}