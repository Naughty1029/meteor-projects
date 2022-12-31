import { Meteor } from "meteor/meteor";
import { ContactCollection } from "./ContactCollection";

Meteor.publish("allContacts",function publichAllContacts(){
    return ContactCollection.find();
})