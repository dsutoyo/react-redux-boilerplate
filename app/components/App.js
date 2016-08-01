import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';

import ActionCreators from '../actions/ActionCreators';

const mapStateToProps = (state) => (
	{
		posts: state.posts
			.map(post => ({ title: post.title.rendered, content: post.content.rendered })),
		tickets: state.tickets
	}
);

const mapDispatchToProps = (dispatch) => (
	{
		fetchPosts: () => dispatch(ActionCreators.fetchPosts()),
		onChooseAirport: (target, airport) => dispatch(ActionCreators.chooseAirport(target, airport))
	}
);

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;