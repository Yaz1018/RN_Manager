import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA65HfUk-e1O7YNuzPGbXWr4FonPNCUhwQ',
      authDomain: 'manager-ab2d8.firebaseapp.com',
      databaseURL: 'https://manager-ab2d8.firebaseio.com',
      projectId: 'manager-ab2d8',
      storageBucket: 'manager-ab2d8.appspot.com',
      messagingSenderId: '137464946433'
    };
firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
