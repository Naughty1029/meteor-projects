import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const ContactCollection = new Mongo.Collection("contacts");

const ContactsSchema = new SimpleSchema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    imageUrl:{
        type:String,
        optional:true
    },
    walletId:{
        type:String,
        //regExp: SimpleSchema.regExp.Id
    },
    createdAt:{
        type:Date
    }
})

ContactCollection.attachSchema(ContactsSchema);