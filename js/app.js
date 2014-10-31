require(['app/model/Group', 'app/model/Person', 'app/model/Joke', 'app/model/Rating', 'app/model/Comment', 'app/controller'], function(Group, Person, Joke, Rating, Comment, controller) {
	var group = new Group({"groupName" : "mainGroup"});
	var group2 = new Group({"groupName" : "Rooster gang"});
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
	group2.persons().add(miguel);
	group2.persons().add(jenny);

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