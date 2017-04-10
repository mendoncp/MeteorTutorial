const PlayerStats = new Mongo.Collection('playerstats');

PlayerStatsSchema = new SimpleSchema({
 playerName : {
   type : String,
   label: "Player Name"
  },
  jerName : {
    type : String,
    label: "Jersey Number"
  },
  pposition : {
    type : String,
    label: "Position"
  }
  ,
 tot_goals : {
    type: String,
    label: "Goals for the Season"
  },
  percentage_wins: {
    type: String,
    label: "Percentage of goals scored During Wins"
  },
  percentage_loss :{
    type:String,
    label:"Percentage of goals scored during loss"
  }
 
});
PlayerStats.attachSchema(PlayerStatsSchema);

export {PlayerStats};