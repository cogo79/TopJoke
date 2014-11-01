define([], function(){
	var mainGroup;
	var mainGroupIsSet = false;
	return {// public interface
		addJokeToPerson : function(person, joke) {
			joke.set({"jokePersonCid" : person.cid});
			person.jokes().add(joke);
		},
		setMainGroup: function(group) {
			if (mainGroupIsSet == false) {
				mainGroup = group;
				mainGroupIsSet = true;
				console.log("mainGroupIsSet");
			};
		},
		mainGroup: function() {
			return mainGroup;
		}
	};
});