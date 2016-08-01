import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';

import App from './components/App';
import Index from './components/Index';
import ContactForm from './components/ContactForm';

import store from './store/store';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './scss/style.scss';

const router = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Index}></IndexRoute>
				<Route path="/contact" component={ContactForm}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));
