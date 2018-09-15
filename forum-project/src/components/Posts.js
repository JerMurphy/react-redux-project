import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postActions'
import PropTypes from 'prop-types';

class Posts extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newPost){
			console.log('adding post', JSON.stringify(nextProps.newPost));
			this.props.posts.unshift(nextProps.newPost);
			console.log(this.props.posts.length)
		}
	}

	render() {
		const postItems = this.props.posts.map(post =>(
	        <div key={post.id}>
	          <h3> {post.title}</h3>
	          <p>{post.body}</p>
	        </div>
        ));
		return (
			<div>
				<h1> Forum </h1>
				{postItems}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	posts: state.posts.items, //named after reducer props
	newPost: state.posts.item
})

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
}

export default connect(mapStateToProps, {fetchPosts})(Posts)