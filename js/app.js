require(['app/model/Group', 'app/model/Person', 'app/model/Joke', 'app/model/Rating', 'app/model/Comment', 'app/controller'], function(Group, Person, Joke, Rating, Comment, controller) {
	var group = new Group({"groupName" : "mainGroup"});
	var group2 = new Group({"groupName" : "mainGroup"});
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

	JokeView = Backbone.View.extend({
		template: _.template($("#joke_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
            //Pass variables in using Underscore.js Template
            console.log("So far so good");
            var variables = { jokeTitle: "hahahahaha ;D", joke: "Group loop croooop hahahah ;D", jokeAuthor: "Miguel Ehrstrand" };

    // Pass this object onto the template function.
    // This returns an HTML string.
    var html = this.template(variables);

    // Append the result to the view's element.
    $(this.el).append(html);
            /*
            // Compile the template using underscore
            var template = _.template( $("#joke_template").html(), variables );
            // Load the compiled HTML into the Backbone "el"
            this.$el.html( template );
            */
        }
    });

	var joke_view = new JokeView({ el: $("#joke-list") });
	console.log("How are we doing now?");
	/*
	console.log("count: ", group.persons().length);
	console.log(group);

	miguel.destroy();
	console.log("count: ", group.persons().length);
	*/


});