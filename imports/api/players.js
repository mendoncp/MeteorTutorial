//import {Mongo} from 'meteor/mongo';
import {Players} from '../collections/players';

//export const Players = new Mongo.Collection('players');

if(Meteor.isServer){

    Meteor.publish('players',function(){

        return Players.find({});
    })
}