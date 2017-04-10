//import {Mongo} from 'meteor/mongo';
import {PlayerStats} from '../collections/playerStats';

//export const PlayerStat = new Mongo.Collection('playerstat');

if(Meteor.isServer){

    Meteor.publish('playerstats',function publishPlayerStat(params){
        console.log(params);
        return PlayerStats.find({});
    })
}