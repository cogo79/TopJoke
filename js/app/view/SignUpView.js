define([], function(){
	console.log("SignUpView.js");

	return Backbone.View.extend({
		template: _.template($("#signup_template_ME").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
		}
	});
});