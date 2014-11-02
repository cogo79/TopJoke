define([], function(){
	return Backbone.Model.extend({
		initialize: function() {
			console.log('New comment created');
		},
		defaults: {
			"comment" : null,
			"PersonUsername" : null,
			"date" : null
		}
	});
});