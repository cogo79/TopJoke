define(['Global', 'app/Controller'], function(Global, Controller){
	return Backbone.View.extend({
		template: _.template($("#login_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			$('#sing_in_button').click(function() {
				var loginPerson = Global.mainGroup().persons().findWhere({
					email:$('#login_email_input').val(),
					password:$('#login_password_input').val(),
				});
				if (loginPerson) {
					loginPerson.set({
						rememberMe : $('#remember-me').is(':checked')
					});
					Global.setLogedInPerson(loginPerson);
					$('.miguels-custom-navbar-right').html('');
					$('.miguels-custom-navbar-right').html(_.template($("#navbar_right_when_loged_in").html()));
					Controller.goToHome();
					require(['app/view/view'], function(view) {
						view.update();
					});
				}
			});
		}
	});
});