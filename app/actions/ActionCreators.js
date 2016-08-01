import { REQUEST_POSTS, RECEIVE_POSTS, CHOOSE_AIRPORT } from '../constants'
import AirCheapAPI from '../api/api';

let PostActionCreators = {

	fetchPosts(origin, destination) {
		return (dispatch) => {
			dispatch({ type: REQUEST_POSTS });
			AirCheapAPI.fetchPosts().then(
				(posts) => dispatch({ type: RECEIVE_POSTS, success:true, posts }),
				(error) => dispatch({ type: RECEIVE_POSTS, success:false })
			);
		};
	}
};

export default PostActionCreators;
