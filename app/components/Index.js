import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class Index extends Component {
	render() {
		console.log(this.props);
		let v = this.props.posts
						.map(post => ( post.title ));
		return (
			<div>
				<p>{v}</p>
			</div>
		)
	}	
}

export default Index;