define([], function(){
	console.log("HighlightedStarsView.js");

	return Backbone.View.extend({
		template: _.template($("#highlightedStars_template_ME").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);

		}
	});
});