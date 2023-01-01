import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import '../imports/api/methods/ContactsMethod';
import '../imports/api/methods/TransactionsMethod';

Meteor.startup(() => {
  render(<App/>, document.getElementById('react-target'));
});
