import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    )
  }
}

export default App;
