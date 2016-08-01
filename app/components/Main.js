import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { IndexLink, Link } from 'react-router';

class Main extends Component {

	componentDidMount(){
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<ul role="nav">
					<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default Main;