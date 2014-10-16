define(['app/model/Person', 'app/model/Joke'], function(Person, Joke) {
	return Backbone.Model.extend({
		initialize: function() {
			Persons = Backbone.Collection.extend({
				model: Person
			});
			this.set('persons', new Persons);

			Jokes = Backbone.Collection.extend({
				model: Joke
			});
			this.set('jokes', new Jokes);

			console.log('New group created');
		},
		defaults: {
			"groupName":  "0"
		},
		persons: function() {
			return this.get('persons');
		},
		jokes: function() {
			return this.get('jokes');
		})
	});
});