define([], function(){
	return Backbone.Model.extend({
		initialize: function() {
			console.log('New group created');
		},
		defaults: {
			"groupName":  "0"
		},
		persons: new Backbone.Collection.extend({

		}),
		jokes: new Backbone.Collection.extend({

		})
	});
});