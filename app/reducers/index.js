import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './posts';

const rootReducer = combineReducers({
	posts: posts,
	form: formReducer
});

export default rootReducer;
