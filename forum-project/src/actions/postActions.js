import {FETCH_POSTS, NEW_POST} from './types';


export function fetchPosts(){
	return function(dispatch){
		fetch('https://jsonplaceholder.typicode.com/posts')
	    .then(res => res.json())
	    .then(data => dispatch({
	    	type: FETCH_POSTS,
	    	payload: data
	    }));
	}
}

export function createPost(postData){
	console.log('createpost')
	return function(dispatch){
		console.log(JSON.stringify(postData))
		fetch('https://jsonplaceholder.typicode.com/posts',{
			method: 'POST',
			headers: {
				'content_type': 'application/json'
			},
			body: JSON.stringify(postData)
		}).then(res => res.json())
		.then(function(data){
			//for some reason the fake API wasnt returning the right data, will change with my own
			data.title = postData.title;
			data.body = postData.body;
			dispatch({
				type: NEW_POST,
				payload: data
			})
			
		});
	}
}