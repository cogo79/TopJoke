define(['Global', 'app/model/Person'], function(Global, Person){
	return Backbone.View.extend({
		template: _.template($("#login_template").html()),
		initialize: function(){
			this.render();
		},
		render: function(){
			var html = this.template();
			$(this.el).append(html);
			$('#sing_in_button').click(function() {
				//console.log("Login button clicked.");
				//console.log("email on login: ", $('#login_email_input').val());
				var loginPerson = Global.mainGroup().persons().findWhere({
					email:$('#login_email_input').val(),
					password:$('#login_password_input').val(),
				});
				if (loginPerson) {
					loginPerson.set({
						rememberMe : $('#remember-me').is(':checked')
					});
					Global.setLogedInPerson(loginPerson);
					console.log('Global.setLogedInPerson(loginPerson); ', Global.logedInPerson(loginPerson));
					$('.miguels-custom-navbar-right').html('');
					$('.miguels-custom-navbar-right').html( _.template($("#navbar_right_when_loged_in").html()) );
				}
				
				/*
				Global.mainGroup().persons().each(function(person) {
					console.log('Global.mainGroup().persons().each: ', person);

				});
*/
			});
		}
	});
})