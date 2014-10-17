define(['app/model/Joke', 'app/model/Group', 'app/model/Rating'], function(Joke, Group, Rating){
	return Backbone.Model.extend({
		initialize: function() {
			Jokes = Backbone.Collection.extend({
				model: Joke
			});
			this.set('jokes', new Jokes);

			Comments = Backbone.Collection.extend({
				model: Comment
			});
			this.set('groups', new Comments);

			Ratings = Backbone.Collection.extend({
				model: Rating
			});
			this.set('ratings', new Ratings);

			console.log('New group created');
		},
		defaults: {
			"username" : null,
			"password" : null,
			"email" : null,
			"loggedIn" : false
		},
		jokes: function() {
			return this.get('jokes');
		},
		comments: function() {
			return this.get('comments');
		},
		ratings: function() {
			return this.get('ratings');
		}
	});
});