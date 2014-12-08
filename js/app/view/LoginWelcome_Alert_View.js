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

