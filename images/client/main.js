// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/images_list';

class App extends Component{
	constructor(props) {  //initialization
		super(props);

		this.state = { images: [] }; //just testing to see if it render, shown in console
	}


	componentWillMount() {
		//place to load data, only load one time
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0').then(
			response => this.setState({ images: response.data.data }));
		// console.log('App is about to render')
		// never do this
		// this.state.images = [ {} , {}]
	}

	render() {
		// console.log(this.state.images); // without this line images data will not be shown in console
		return (
			<div>
				<ImageList images={this.state.images} />
			</div>
		);
	}	
	
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
	
});
