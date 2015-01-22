define([], function() {
	return Backbone.View.extend({
		template: _.template($("#joke_template_ME").html()),
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
});
