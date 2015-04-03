define(['app/model/Group', 'app/model/Person'], function(Group, Person){
	var mainGroup;
	var collection = Backbone.Collection.extend({
		model: Group
	});
	var groups = new collection;
	var mainGroupIsSet = false;
	var logedInPerson;
	var currentGroup;
	return {// public interface
		addJokeToPerson : function(person, joke) {
			joke.set({"PersonUsername" : person.get('username')});
			joke.set({"jokeAuthor_cid" : person.cid});
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
		},
		setCurrentGroup: function(group) {
			currentGroup = group;
		},
		currentGroup: function() {
			return currentGroup;
		},
		signOut: function() {
			logedInPerson = null;
			currentGroup = mainGroup;
		}
	};
});