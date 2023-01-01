import { Meteor } from "meteor/meteor";
import { ContactCollection } from "../collections/ContactCollection";

Meteor.publish("allContacts",function publichAllContacts(){
    return ContactCollection.find();
})

Meteor.publish("contacts",function publichAllContacts(){
    return ContactCollection.find({ archived: {$ne: true}});
})