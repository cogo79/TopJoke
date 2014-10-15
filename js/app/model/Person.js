define([], function(){
	return Backbone.Model.extend({
		defaults: {
			"username" : "0",
			"password" : "0",
			"email" : "0",
			"loggedIn" : false
		}
	});
});