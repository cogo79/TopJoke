define([], function() {
	return Backbone.View.extend({
		template: _.template($("#joke_template_ME").html()),
		//$stars: null,
		jokeModel_cid: '', starRatingWidth: '', jokeAuthor_cid : '', title: '', joke: '', jokeAuthor: '', date: '',
		initialize: function(options){

			this.jokeModel_cid = options.jokeModel_cid;
			this.starRatingWidth = options.starRatingWidth;
			this.jokeAuthor_cid = options.jokeAuthor_cid;
			this.title = options.title;
			this.joke = options.joke;
			this.jokeAuthor = options.jokeAuthor;
			this.date = options.date;
			
			this.render();
		},
		render: function(){
            var variables = { jokeModel_cid: this.jokeModel_cid, starRatingWidth: this.starRatingWidth, jokeAuthor_cid: this.jokeAuthor_cid, title: this.title, joke: this.joke, jokeAuthor: this.jokeAuthor , date: this.date};
    		var html = this.template(variables);
			$(this.el).append(html);
		//	this.$stars = $(html).find('stars_ME');
        },
        rate: function(rating) {
        	
        }
    });
});
