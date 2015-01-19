define(['app/model/Joke', 'app/model/Group', 'app/model/Rating', 'app/model/Comment'], function(Joke, Group, Rating, Comment){
	return Backbone.Model.extend({
		initialize: function() {
			Jokes = Backbone.Collection.extend({
				model: Joke
			});
			this.set('jokes', new Jokes);

			Comments = Backbone.Collection.extend({
				model: Comment
			});
			this.set('comments', new Comments);

			Ratings = Backbone.Collection.extend({
				model: Rating
			});
			this.set('ratings', new Ratings);

			Groups = Backbone.Collection.extend({
				model: Group
			});
			this.set('groups', new Group);

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
      	},
      	groups: function() {
      		return this.get('groups');
      	}
    });
});
