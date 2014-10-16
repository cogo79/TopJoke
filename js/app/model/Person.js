define(['app/model/Joke', 'app/model/Group', 'app/model/Rating'], function(Joke, Group, Rating){
	return Backbone.Model.extend({
		initialize: function() {
			Jokes = Backbone.Collection.extend({
				model: Joke
			});
			this.set('jokes', new Jokes);

			Groups = Backbone.Collection.extend({
				model: Group
			});
			this.set('groups', new Groups);

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
		}
		jokes: function() {
			return this.get('jokes');
		}),
		groups: function() {
			return this.get('groups');
		}),
		ratings: function() {
			return this.get('ratings');
		})
	});
});