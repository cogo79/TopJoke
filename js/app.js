require(['app/model/Group', 'app/model/Person', 'app/model/Joke', 'app/model/Rating', 'app/model/Comment', 'app/controller'], function(Group, Person, Joke, Rating, Comment, controller) {
	var group = new Group({"groupName" : "mainGroup"});
	var miguel = new Person({
		"username" : "migobigo",
		"password" : "blabla222",
		"email" : "skumbag@playboy.com"
	});
	var jenny = new Person({
		"username" : "jennybenny",
		"password" : "nej444422",
	//	"email" : "jenny@aftonbladet.se"
	});
	group.persons().add(miguel);
	group.persons().add(jenny);
	console.log("count: ", group.persons().length);
	console.log(group);

	miguel.destroy();
	console.log("count: ", group.persons().length);
});