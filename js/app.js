require(['app/model/Group', 'app/model/Person', 'app/model/Joke', 'app/model/Rating', 'app/model/Comment', 'app/controller'], function(Group, Person, Joke, Rating, Comment, controller) {
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

	var mainGroup = new Group({"groupName" : "mainGroup"});
	mainGroup.persons().add(miguel);
	mainGroup.persons().add(jenny);
	mainGroup.persons().add(micke);
	mainGroup.persons().add(pelle);
	mainGroup.persons().add(cissela);

	var roosterGang = new Group({"groupName" : "Rooster gang"});
	roosterGang.persons().add(miguel);
	roosterGang.persons().add(jenny);

	var joke1 = new Joke({"title" : "Goofer",
		"joke" : "Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!' Goofy feel on his knes and said, 'Dude stop turning me on!'",
		"date" : Date()
	});
	console.log("joke1.toJSON() --> ", joke1.toJSON());
	miguel.jokes().add(joke1);
	console.log("miguel and his jokes: ", miguel);

	JokeView = Backbone.View.extend({
		template: _.template($("#joke_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
            var variables = { title: joke1.get("title"), joke: joke1.get("joke"),
             jokeAuthor: miguel.get("username") };
    		var html = this.template(variables);
			$(this.el).append(html);
        }
    });

	var joke_view = new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });
	new JokeView({ el: $("#joke-list") });

	console.log("How are we doing now?");
	/*
	console.log("count: ", group.persons().length);
	console.log(group);

	miguel.destroy();
	console.log("count: ", group.persons().length);
	*/


});