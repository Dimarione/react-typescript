import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PersonForm from './components/PersonForm/PersonForm';
import PersonList from './components/PersonList/PersonList';
import Nav from './components/Nav/Nav';
import rootReducers from './store/redusers'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { watchLoadPersonData, watchUploadPersonData } from './sagas';


const App: React.FC = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducers, applyMiddleware(logger, sagaMiddleware));

  sagaMiddleware.run(watchLoadPersonData);
  sagaMiddleware.run(watchUploadPersonData);

  return (
      <Provider store = { store }>
        <Router>
          <Nav />
          <Switch>
            <Route exact path = '/form' component = { PersonForm } />
            <Route path = '/list' component = { PersonList } />
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
