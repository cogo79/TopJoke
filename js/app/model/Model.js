define(['app/model/Group', 'app/model/Person'], function(Group, Person){
	var mainGroup;
	var collection = Backbone.Collection.extend({
		model: Group
	});
	var groups = new collection;
	var mainGroupIsSet = false;
	var logedInPerson;
	return {// public interface
		addJokeToPerson : function(person, joke) {
			joke.set({"PersonUsername" : person.get('username')});
			person.jokes().add(joke);
		},
		setMainGroup: function(group) {
			if (mainGroupIsSet == false) {
				mainGroup = group;
				mainGroupIsSet = true;
				console.log("Main group is set");
			};
		},
		mainGroup: function() {
			return mainGroup;
		},
		groups: function() {
			return groups;
		},
		setLogedInPerson: function(person) {
			logedInPerson = person;
		},
		logedInPerson: function() {
			return logedInPerson;
		}
	};
});