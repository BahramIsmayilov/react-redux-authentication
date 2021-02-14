import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './store/reducer/authReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

const mainReducer = combineReducers({
	authReducer: authReducer,
});

axios.defaults.baseURL = "https://bahram-dev.herokuapp.com/api";

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
