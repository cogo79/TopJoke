define([], function(){
	console.log("LoginWelcome_Alert_View.js");

	return Backbone.View.extend({
		template: _.template($("#alert_login_welcome_ME").html()),
		username: '',
		initialize: function(options){
			this.username = options.username;
			this.render();
		},
		render: function(){
			var variables = {username:this.username};
			var html = this.template(variables);
			$(this.el).append(html);
			
		}
	});
});

/*
define([], function() {
	return Backbone.View.extend({
		template: _.template($("#joke_template").html()),
		title: '', joke: '', jokeAuthor: '',
		initialize: function(options){

			this.title = options.title;
			this.joke = options.joke;
			this.jokeAuthor = options.jokeAuthor;
			
			this.render();
		},
		render: function(){
            var variables = { title: this.title, joke: this.joke, jokeAuthor: this.jokeAuthor };
    		var html = this.template(variables);
			$(this.el).append(html);
        }
    });
})
*/