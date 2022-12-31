import { Meteor } from "meteor/meteor";
import { ContactCollection } from "./ContactCollection";

Meteor.publish("allContacts",function publichAllContacts(){
    return ContactCollection.find();
})

Meteor.publish("contacts",function publichAllContacts(){
    return ContactCollection.find({ archived: {$ne: true}});
})