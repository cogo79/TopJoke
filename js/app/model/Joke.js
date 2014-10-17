define(['app/model/Rating', 'app/model/Comment'], function(Rating, Comment){
	return Backbone.Model.extend({
		
		defaults: {
			"joke" : "0",
			"date" : null,
		}
	});
});