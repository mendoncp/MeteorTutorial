
const GameStats = new Mongo.Collection('gamestat');

GameStatSchema = new SimpleSchema({
game_id : {
type : Number,
label : "Game Id"
},
 Date : {
     
    type: String,
    label: "Game Date",
    max: 200
  },
  oppteam: {
    type: String,
    label: "Opposition Team"
  },
  gameResult: {
    type: String,
    label: "Game Result",
    
  },
   score: {
    type: String,
    label: "Game Score",
    
  }
  
 
});
GameStats.attachSchema(GameStatSchema);

export {GameStats};