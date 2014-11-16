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

			console.log('Person "'+ this.get('username') +'" created. Cid: ', this.cid);
		},
		defaults: {
			"username" : null,
			"password" : null,
			"email" : null,
			"phone number" : null,
			"bio" : null,
			"first name" : null,
			"surname" : null,
			"rememberMe": false
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
