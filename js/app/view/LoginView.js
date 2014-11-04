define([], function() {
	return Backbone.View.extend({
		template: _.template($("#login_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			$('#sing_in_button').click(function() {
				console.log("Login button clicked.");
			});
		}
	});
})