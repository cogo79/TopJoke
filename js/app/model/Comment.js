define([], function(){
	return Backbone.Model.extend({
		initialize: function() {
			console.log('New comment created');
		},
		defaults: {
			"comment" : null,
			"commentPersonCid" : null,
			"date" : null
		}
	});
});