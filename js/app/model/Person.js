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
			"bio" : "",
			"loggedIn" : false,
			"first name" : null,
			"surname" : null,
			"remember me": false
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
/*
,
				add: function(models, options) {
					/*
					models.each(function(model) {
						model.set({'jokePersonCid' : this.cid});
						console.log("Joke model having attribute 'jokePersonCid' set to: ", this.cid);
					});

		//	console.log("models: ", models); console.log("cid: ", this.cid);
			/*
					for (var i = 0; i < models.length; i++) {
						models[i].set({'jokePersonCid' : this.cid});
						console.log("Joke model having attribute 'jokePersonCid' set to: ", this.cid);
					};
					* /
					models.set({'jokePersonCid' : this.cid});
					console.log("Joke model having attribute 'jokePersonCid' set to: ", this.cid);
					var addOptions = {add: true, remove: false};
					return this.set(models, _.extend({merge: false}, options, addOptions));
				}
				*/