define([], function(){
	return Backbone.Model.extend({
		initialize: function() {
			console.log('New rating created');
		},
		defaults: {
			"points" : 0,
		}
	});
});