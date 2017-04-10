import { Meteor } from 'meteor/meteor';
import '../imports/api/players.js';
import '../imports/api/gamestats.js';
import '../imports/api/playerStats.js'
import { Players } from '../imports/collections/players.js';
import { GameStats } from '../imports/collections/gamestat.js';
import { PlayerStats} from '../imports/collections/playerStats.js';
import {GameStatData} from './gameStatData';
import {PlayerData} from './playerData';
import { PlayerStatData } from './playerStatData';


Meteor.startup(() => {
  // code to run on server at startup

  _.each(PlayerData.players, function(p) {
    
		Players.upsert({
			name: p.name
		}, {
			$set: {
				name: p.name,
			  JNumber: p.JNumber,
        position:p.position
			}
		}, function(error, result) {
			if (error) {
				let errMsg = 'Error while writing Player data';
				console.error(errMsg, error);
				throw new Meteor.Error('500', errMsg);
			}
		});
	});

    _.each(GameStatData.gamestats, function(g) {
       
		GameStats.upsert({
			game_id: g.game_id
		}, {

			$set: {
				Date: g.Date,
			  oppteam: g.oppteam,
        gameResult:g.gameResult,
        score:g.score

			}
		}, function(error, result) {
			if (error) {
				let errMsg = 'Error while writing Game data';
				console.error(errMsg, error);
				throw new Meteor.Error('500', errMsg);
			}
		});
	});
    _.each(PlayerStatData.playerstats, function(ps) {
   
		PlayerStats.upsert({
			playerName: ps.playerName
		}, {
			$set: {

				playerName: ps.playerName,
        jerName: ps.jerName,
        pposition:ps.pposition,
			  tot_goals: ps.tot_goals,
        percentage_wins:ps.percentage_wins,
        percentage_loss:ps.percentage_loss

			}
		}, function(error, result) {
			if (error) {
				let errMsg = 'Error while writing Game data';
				console.error(errMsg, error);
				throw new Meteor.Error('500', errMsg);
			}
		});
	});
  


});
