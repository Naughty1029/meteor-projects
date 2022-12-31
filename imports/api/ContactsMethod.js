import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ContactCollection } from "../api/ContactCollection";

Meteor.methods({
    "contacts.insert":({name,email,imageUrl})=>{
        check(name,String);
        check(email,String);
        check(imageUrl,String);
        if(!name) {
            throw new Meteor.Error("Name is required.")
        }
        return ContactCollection.insert({name,email,imageUrl,createdAt:new Date()});
    },
    "contacts.remove":({contactId})=> {
        check(contactId,String);
        return ContactCollection.remove(contactId);
    }
})