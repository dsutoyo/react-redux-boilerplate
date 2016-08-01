import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class Item extends Component {
	render() {
		return (
			<h1>{this.props.params.postId}</h1>
		)
	}	
}

export default Item;