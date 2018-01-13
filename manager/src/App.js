import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component{
	componentWillMount(){
		var config = {
		    apiKey: "AIzaSyDTgnDLfVTzs9YQMfzwkCM75ZSwxz1mBdw",
		    authDomain: "authentication-2f71a.firebaseapp.com",
		    databaseURL: "https://authentication-2f71a.firebaseio.com",
		    projectId: "authentication-2f71a",
		    storageBucket: "authentication-2f71a.appspot.com",
		    messagingSenderId: "748005494118"
		  };
		  firebase.initializeApp(config);
	}

	render(){
		return(
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;