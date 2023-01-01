import { Meteor } from 'meteor/meteor';
import '../imports/api/collections/ContactCollection';
import '../imports/api/collections/WalletsCollection';
import '../imports/api/collections/TransactionsCollection';
import '../imports/api/methods/ContactsMethod';
import '../imports/api/methods/TransactionsMethod';
import '../imports/api/publications/ContactPublications';
import '../imports/api/publications/WalletsPublications';
import { WalletsCollection } from '../imports/api/collections/WalletsCollection';
import "../infra/CustomError"

Meteor.startup(async () => {
    if(!WalletsCollection.find().count()){
        WalletsCollection.insert({
            createdAt:new Date(),
            currency:"USD"
        });
    }
});
