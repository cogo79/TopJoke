define(function(require){

	var Global = require('Global');
	var Group = require('app/model/Group');
	var Person = require('app/model/Person');
	var Joke = require('app/model/Joke');
	var JokeView = require('app/view/JokeView');

	Global.setMainGroup(new Group({"groupName" : "mainGroup"}));

	var miguel = new Person({
		"username" : "migobigo",
		"password" : "blabla222",
		"email" : "skumbag@playboy.com"
	});
	var jenny = new Person({
		"username" : "jenny",
		"password" : "nej444422",
		"email" : "jenny.janson@aftonbladet.se"
	});
	var micke = new Person({
		"username" : "micke",
		"password" : "nej422Jo",
		"email" : "micke.person@aftonbladet.se"
	});
	var pelle = new Person({
		"username" : "Pelle",
		"password" : "jajag heter pelle tamefan",
		"email" : "pelle.berggren@aftonbladet.se"
	});
	var cissela = new Person({
		"username" : "Cissela",
		"password" : "jajag heter pelle tamefan",
		"email" : "pelle.berggren@aftonbladet.se"
	});
	
	/*
	Global.setLogedInPerson(miguel);
	console.log("Loged in person: ", Global.logedInPerson());
	miguel.destroy({success: function(model, response) {
		Global.setLogedInPerson(null);
	}});
	console.log("Loged in person: ", Global.logedInPerson());
	*/
	
	Global.mainGroup().persons().add(miguel);
	Global.mainGroup().persons().add(jenny);
	Global.mainGroup().persons().add(micke);
	Global.mainGroup().persons().add(pelle);
	Global.mainGroup().persons().add(cissela);

	var roosterGang = new Group({"groupName" : "Rooster gang"});
	roosterGang.persons().add(miguel);
	roosterGang.persons().add(jenny);
	Global.groups().add(roosterGang);

	var joke;
	joke = new Joke({"title" : "Goofer",
		"joke" : "Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!'",
		"date" : Date()
	});
	Global.addJokeToPerson(miguel, joke);
	Global.mainGroup().jokes().add(joke);
	
	joke = new Joke({"title" : "Rambo trufer",
		"joke" : "And then Rambo drew his gun and said 'Hasta la vista baby'. And terminator came and said 'Oh I´m shaking!'",
		"date" : Date()
	});
	Global.addJokeToPerson(miguel, joke);
	Global.mainGroup().jokes().add(joke);
	
	joke = new Joke({"title" : "Super Mario lovers",
		"joke" : "Mario jumped out of the screan and said to little Joe, 'Wanna go out and pick som mushrooms?'",
		"date" : Date()
	});
	Global.addJokeToPerson(miguel, joke);
	Global.mainGroup().jokes().add(joke);

	joke = new Joke({"title" : "Mo sistas",
		"joke" : "Jenifer just smiled and said to Mary. 'How´s you mo Joe runin?'",
		"date" : Date()
	});
	Global.addJokeToPerson(pelle, joke);
	Global.mainGroup().jokes().add(joke);
	
	joke = new Joke({"title" : "Zeldas last wish",
		"joke" : "As he finaly realized that his days where conted and the end was near, Billy droped by and said: 'Cheer up dude! I brought you some extra life. That will keep you going for at least another couple of days'",
		"date" : Date()
	});
	Global.addJokeToPerson(micke, joke);
	Global.mainGroup().jokes().add(joke);
	
	joke = new Joke({"title" : "Speed way",
		"joke" : "Is this a joking site? Well hell! Speed way is just such a joke that you don´t even need to joke about it.",
		"date" : Date()
	});
	Global.addJokeToPerson(micke, joke);
	Global.mainGroup().jokes().add(joke);

	Global.mainGroup().jokes().each(function(joke) {
		var title, joke, jokeAuthor;
		title = joke.get('title');
		jokeStr = joke.get('joke');
		jokeAuthor = joke.get('PersonUsername');
		new JokeView({ el: $(".joke-list"), title: title, joke: jokeStr, jokeAuthor: jokeAuthor});		
	});


	var goToHomee = function() {
		$('.joke-list').html('');
		Global.mainGroup().jokes().each(function(joke) {
			var title, joke, jokeAuthor;
			title = joke.get('title');
			jokeStr = joke.get('joke');
			jokeAuthor = joke.get('PersonUsername');
			new JokeView({ el: $(".joke-list"), title: title, joke: jokeStr, jokeAuthor: jokeAuthor});		
		});
	};
	return {// public interface
		goToHome : goToHomee
	};
});
























