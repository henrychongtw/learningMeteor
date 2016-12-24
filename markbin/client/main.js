import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Bins } from '../imports/collections/bins';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';

import App from './components/app';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={BinsList} />
			<Route path='bins/:binId' component={BinsMain} />
		}
		</Route>
	</Router>
);

Meteor.startup(() => {
	ReactDOM.render(routes, document.querySelector('.render-target'));

});