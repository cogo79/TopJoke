define([], function(){
	console.log("LoginView.js");

	return Backbone.View.extend({
		template: _.template($("#login_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			require(['app/view/view'], function(view) {
				view.update();
			});
		}
	});
});