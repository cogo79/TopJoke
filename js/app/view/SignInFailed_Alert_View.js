define([], function(){
	console.log("SignInFailed_Alert_View.js");

	return Backbone.View.extend({
		template: _.template($("#alert_login_failed_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			
		}
	});
});