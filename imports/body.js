import { Template } from 'meteor/templating';
import {Players} from './collections/players';
import { GameStats} from './collections/gamestat';
import { PlayerStats } from './collections/playerStats';
import './body.html';

Template.Players.onCreated(function bodyOnCreated(){
  		Meteor.subscribe('players');
        Meteor.subscribe('gamestats');
        Meteor.subscribe('playerstats');
})

/**
 * 
 * Display all Players
 */
 
Template.Players.helpers({
 
  players() {
      return Players.find({});
  },
})

/**
 * Display all game stats
 * 
 */

Template.GameStats.helpers({

  gamestats() {
      return GameStats.find({});
  },
});
 /**
  * See Player Stats
  */
Template.PlayerStats.helpers({
   
  playerstats:function() {
       var name = FlowRouter.getParam("name");
      return PlayerStats.find({playerName : name});
  },
});