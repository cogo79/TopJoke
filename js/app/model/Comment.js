define([], function(){
	return Backbone.Model.extend({
		initialize: function() {
			console.log('New comment created');
		},
		defaults: {
			"comment" : null,
			"commentPersonId" : null,
			"date" : null
		}
	});
});