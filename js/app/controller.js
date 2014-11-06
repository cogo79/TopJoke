define(['Global', 'app/model/Group', 'app/model/Person', 'app/model/Joke', 'app/view/JokeView'], function(Global, Group, Person, Joke, JokeView){
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
	joke = new Joke({"title" : "Bellboy",
		"joke" : "There was a church that had a bell that no one could ring. One day, a boy came and asked the priest if he could try. He went up into the tower and ran straight into the bell face-first. The bell tolled loud and clear. The priest gave him the job. One Sunday, the boy ran straight toward the bell with his face and missed, so he fell off the tower and died. \"Congregation,\" the priest said before the assembled masses. \"Does anybody know this boy's name? I don't know him, but his face rings a bell.\"",
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
























