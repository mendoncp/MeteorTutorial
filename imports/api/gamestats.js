 //import {Mongo} from 'meteor/mongo';
import {GameStats} from '../collections/gamestat';

 //export const  GameStats = new Mongo.Collection('gamestats'); 

 if(Meteor.isServer){
  Meteor.publish('gamestats',function publishGameStats(){
    return GameStats.find();
    })
 }