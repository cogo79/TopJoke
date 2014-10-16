define([], function(){
	return Backbone.Model.extend({
		defaults: {
			"joke" : "0",
			"date" : null,
			"Person" : null,
			"Group" : null
		}
	});
});