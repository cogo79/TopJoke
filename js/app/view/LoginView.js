define(['app/view/view'], function(view){
	console.log("LoginView.js");

	/*
	var view;
	require(['app/view/view'], function(viewParameter) {
						//view.goToHome();
		view = viewParameter;
		console.log("view: ", view);
	});
*/

	return Backbone.View.extend({
		template: _.template($("#login_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			view.update();
		}
	});
});