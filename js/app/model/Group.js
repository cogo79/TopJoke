define(['app/model/Person', 'app/model/Joke', 'app/model/Rating', 'app/model/Comment'], function(Person, Joke, Rating, Comment) {
	return Backbone.Model.extend({
		initialize: function() {
			
			Jokes = Backbone.Collection.extend({
				model: Joke
			});
			this.set('jokes', new Jokes);

			Ratings = Backbone.Collection.extend({
				model: Rating
			});
			this.set('ratings', new Ratings);

			Comments = Backbone.Collection.extend({
				model: Comment
			});
			this.set('comments', new Comments);

			Persons = Backbone.Collection.extend({
				model: Person
			});
			this.set('persons', new Persons);

			console.log('New group created. Cid: ', this.cid);
		},
		defaults: {
			"groupName":  "0"
		},
		jokes: function() {
			return this.get('jokes');
		},
		ratings: function() {
			return this.get('ratings');
		},
		comments: function() {
		return this.get('comments');
		},
		persons: function() {
			return this.get('persons');
		},
		addPerson: function(person) {
			this.get('persons').add(person);
			person.groups().add(this);
		}
	});
});