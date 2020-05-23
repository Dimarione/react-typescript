import React from 'react';
import './PersonForm.css';
import { connect } from 'react-redux'
import {
    setFirstNameText,
    setLastNameText,
    setAgeText,
    setEmailText
} from '../../store/PersonForm/actions';
import { IPerson } from '../../interfaces';

//компанент инпута
const Input: React.FC = (props) => {
    return (
        <div className = "form-group">
            <label
                id = { props.id+ "-label" }
                htmlFor = { props.id }>
                { props.id }
            </label>
            <input id = { props.id }
                   type = { props.type }
                   placeholder = { "Enter your " + props.id }
                   className = "form-control"
                   required
                   value = { props.value }
                   onChange = { props.onChange }
                   min = { props.min }
                   max = { props.max }
            />
        </div>);
}

//-----------------
async function rest<IPerson>(person: IPerson) {
    let url = "https://server-side-form.herokuapp.com/employee";
    try {
        let promise = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(person)
        })
        if (promise !== undefined) {
            if (promise.ok) { // если HTTP-статус в диапазоне 200-299
                // получаем тело ответа (см. про этот метод ниже)
                alert("Сохранено в БД");
            } else {
                alert("Ошибка HTTP: " + promise.status);
            }
        }
    } catch (error) {
        alert("Нет доступа к серверу");
    }
}

//-------------------

class PersonForm extends React.Component {

    handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setFirstNameText(event.target.value);
    }

    handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setLastNameText(event.target.value)
    }

    handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setAgeText(event.target.value)
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setEmailText(event.target.value)
    }

    handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        //объект с данными пользователя
        let person: IPerson = Object.assign({
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            email: this.props.email,
        });
        console.log(person);
        // alert(JSON.stringify(person, null, 4));
        rest(person);
        // let history = useHistory();
        // history.push("/personList");
        // window.location.assign('http://localhost:3000/personList/');
        // this.props.history.push('/personList');
    }


    render() {
        return (
            <div>
                <form onSubmit = { this.handleSubmit } id = "survey-form">
                    <h1>Sign Up</h1>
                    <fieldset>
                        <legend>Your basic info</legend>
                        {/*<Input value = { this.state.firstName }*/ }
                        <Input value = { this.props.firstName }
                               onChange = { this.handleFirstNameChange }
                               id = "First Name"
                               type = "text"
                        />
                        {/*<Input value = { this.state.lastName }*/ }
                        <Input value = { this.props.lastName }
                               onChange = { this.handleLastNameChange }
                               id = "Last Name"
                               type = "text"
                        />
                        {/*<Input value = { this.state.age }*/ }
                        <Input value = { this.props.age }
                               onChange = { this.handleAgeChange }
                               id = "age"
                               type = "number"
                               min = '10'
                               max = '99'
                        />
                        {/*<Input value = { this.state.email }*/ }
                        <Input value = { this.props.email }
                               onChange = { this.handleEmailChange }
                               id = "E-mail"
                               type = "email"
                        />

                        <button id = "submit"
                                type = "submit"
                                className = "submit-button">
                            Submit
                        </button>
                    </fieldset>

                </form>
            </div>

        );
    }
}

//добавляем props из state
const setStateToProps = (state) => {
    return {
        firstName: state.personForm.firstName,
        lastName: state.personForm.lastName,
        age: state.personForm.age,
        email: state.personForm.email,
    }
}
//привязываем функсции cationCreators
const setDispatchToProps = {
    setFirstNameText: setFirstNameText,
    setLastNameText: setLastNameText,
    setAgeText: setAgeText,
    setEmailText: setEmailText,
}

export default connect(setStateToProps, setDispatchToProps)(PersonForm);