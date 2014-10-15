define(['app/model/Person'], function(Person) {
	return Backbone.Model.extend({
		initialize: function() {
			Persons = Backbone.Collection.extend({
				model: Person
			});
			this.set('persons', new Persons);
			console.log('New group created');
		},
		defaults: {
			"groupName":  "0"
		},
		persons: function() {
			return this.get('persons');
		},
		jokes: new Backbone.Collection.extend({

		})
	});
});