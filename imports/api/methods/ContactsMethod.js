import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { ContactCollection } from "../collections/ContactCollection";

Meteor.methods({
    "contacts.insert":({name,email,imageUrl,walletId})=>{
        check(name,String);
        check(email,String);
        check(imageUrl,String);
        if(!name) {
            throw new Meteor.Error("Name is required.")
        }
        if(!walletId){
            throw new Meteor.Error("Wallet ID is required.")
        }
        return ContactCollection.insert({
            name,
            email,
            imageUrl,
            walletId,
            createdAt:new Date()
        });
    },
    "contacts.remove":({contactId})=> {
        check(contactId,String);
        return ContactCollection.remove(contactId);
    },
    "contacts.archive":({contactId})=> {
        check(contactId,String);
        return ContactCollection.update({_id:contactId},{$set:{archived:true}});
    }
})