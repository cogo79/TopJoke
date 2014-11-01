define(['app/model/Rating', 'app/model/Comment'], function(Rating, Comment){
	return Backbone.Model.extend({
		initialize: function() {
			
			Ratings = Backbone.Collection.extend({
				model: Rating
			});
			this.set('ratings', new Ratings);

			Comments = Backbone.Collection.extend({
				model: Comment
			});
			this.set('comments', new Comments);

			console.log('New joke created');
		},
		ratings: function() {
			return this.get('ratings');
		},
		comments: function() {
		return this.get('comments');
		},
		defaults: {
			"title" : "0",
			"joke" : "0",
			"jokePersonCid" : null,
			"date" : null
		}

	});
});