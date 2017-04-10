const Players = new Mongo.Collection('players');

PlayersSchema = new SimpleSchema({
 name : {
    type: String,
    label: "Name",
    max: 200
  },
  JNumber: {
    type: String,
    label: "Jersey Number"
  },
  position: {
    type: String,
    label: "Game Position",
    
  }
  
 
});
Players.attachSchema(PlayersSchema);

export {Players};