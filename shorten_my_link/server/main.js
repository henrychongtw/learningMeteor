import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
  	return Links.find({});
  });
});

// Executed whenever a user visits with a route like 'localhost:8000/abcd'
function onRoute(req, res, next) {
	// Take the token out of url and try to find a matching link in the links collections
	const link = Links.findOne({ token: req.params.token }); // findOne, find the first matching


	// if we find a link object, redirect the user to the long url
	if (link) {
		Links.update(link, { $inc: { clicks: 1}});


		res.writeHead(307, { 'Location': link.url});
		res.end();


	// if we dont find a link object, send the user to our normal React app
	} else {
		next();
	}




}

//localhost:8000/ nomatch
//localhost:8000/books/harry_potter nomatch
//localhost:8000/abcd match

const middleware = ConnectRoute(function(router) {
	router.get('/:token', onRoute);
});

WebApp.connectHandlers.use(middleware);

