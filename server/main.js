import { Meteor } from 'meteor/meteor';
import '../api/collections/ContactCollection';
import '../api/collections/WalletsCollection';
import '../api/collections/TransactionsCollection';
import '../api/methods/ContactsMethod';
import '../api/methods/TransactionsMethod';
import '../api/publications/ContactPublications';
import '../api/publications/WalletsPublications';
import { WalletsCollection } from '../api/collections/WalletsCollection';
import "../infra/CustomError"

Meteor.startup(async () => {
    if(!WalletsCollection.find().count()){
        WalletsCollection.insert({
            createdAt:new Date(),
            currency:"USD"
        });
    }
});
