define([], function(){
	console.log("NewJokeView.js");

	return Backbone.View.extend({
		template: _.template($("#new_joke_template_ME").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			
		}
	});
});