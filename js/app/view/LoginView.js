define([], function(){
	console.log("LoginView.js");

	return Backbone.View.extend({
		template: _.template($("#login_template_ME").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			require(['app/controller'], function(controller) {
				controller.update();
			});
		}
	});
});