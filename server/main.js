import { Meteor } from 'meteor/meteor';
import '../imports/api/ContactCollection';
import '../imports/api/WalletsCollection';
import '../imports/api/TransactionsCollection';
import '../imports/api/ContactsMethod';
import '../imports/api/TransactionsMethod';
import '../imports/api/ContactPublications';
import '../imports/api/WalletsPublications';
import { WalletsCollection } from '../imports/api/WalletsCollection';

Meteor.startup(async () => {
    if(!WalletsCollection.find().count()){
        WalletsCollection.insert({
            balance:0,
            currency:"USD",
            createdAt:new Date()
        })
    }
});
