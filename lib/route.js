/**
 * 
 * Routes to Nabvigate througt eh app using flow router
 */

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("soccerApp", {content: "Players"});
  }
});

FlowRouter.route('/gamestats', {
  action: function() {
    BlazeLayout.render("soccerApp", {content: "GameStats"});
  }
});

FlowRouter.route('/:name', {
  action: function(params, queryParams) {
    
    BlazeLayout.render("soccerApp", {content: "PlayerStats"});
  }
});