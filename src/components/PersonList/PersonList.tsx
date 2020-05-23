import React from 'react';
import './PersonList.css'
import { connect } from 'react-redux';
import {
    deletePerson,
    changeListOfPerson,
    loadPersonData,
    uploadPersonData
} from '../../store/PersonList/actions';
import {RootState} from "../../store/redusers";

interface DispatchProps {
    deletePerson: typeof deletePerson,
    changeListOfPerson: typeof changeListOfPerson,
    loadPersonData: typeof loadPersonData,
    uploadPersonData: typeof uploadPersonData,
}

interface StateProps {
    listOfPerson: RootState['personList']['listOfPerson']
}


type PersonListProps = DispatchProps & StateProps;

class PersonList extends React.Component<PersonListProps> {
    componentDidMount() {
        console.log('Component did mount');
        this.props.loadPersonData();
    }


    render() {
        return (
            <div className = 'container'>
                <div className = 'wrapper'>
                    <div className = 'title'>
                        List of all person
                    </div>

                    <div className = 'list-of-person'>

                        <div className = 'person-list-title'>
                            <div className = 'title-item'>First name</div>
                            <div className = 'title-item'>Last name</div>
                            <div className = 'title-item'>Age</div>
                            <div className = 'title-item'>E-mail</div>
                            <div className = 'title-item' />
                        </div>

                        {this.props.listOfPerson.map((person, id: number) => (
                            <div key = {id} className = 'person-list-item'>
                                <div className = 'person-item'>{person.firstName}</div>
                                <div className = 'person-item'>{person.lastName}</div>
                                <div className = 'person-item'>{person.age}</div>
                                <div className = 'person-item'>{person.email}</div>
                                <div className = 'person-item'>
                                    <button className = 'delete-button'
                                            onClick = {() => this.props.uploadPersonData(person, id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

const setStateToProps = (state: RootState) => {
    return {
        listOfPerson: state.personList.listOfPerson
    }
}

const mapDispatchToProps = {
    deletePerson: deletePerson,
    changeListOfPerson: changeListOfPerson,
    loadPersonData: loadPersonData,
    uploadPersonData: uploadPersonData,
}

export default connect(setStateToProps, mapDispatchToProps)(PersonList);