//only execute on the server

import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import _ from 'lodash';
import { image, helpers } from 'faker';


Meteor.startup(() => {
  // place to generate data


  //check to see if data exist in the collection
  //see if the collection has any records

  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);
  if (!numberRecords) {
  	// generate some data
  	_.times(5000, () => {
  		const { name, email, phone } = helpers.createCard();

  		Employees.insert({
  			// name: name,
  			// email: email,
  			// phone: phone
  			// or
  			name, email, phone,
  			avatar: image.avatar()
  		});
  	});
  }

  Meteor.publish('employees', function(per_page) {
  	return Employees.find({}, { limit: per_page });

  });
});
