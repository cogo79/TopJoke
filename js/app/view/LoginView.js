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
					console.log("" + loginPerson.get('username') + " loged in.");
					console.log("$('#remember-me').is(':checked ---> ')" ,$('#remember-me').is(':checked'));
					loginPerson.set({
						rememberMe : $('#remember-me').is(':checked')
					});
				}
				console.log('loginPerson: ', loginPerson);
				/*
				Global.mainGroup().persons().each(function(person) {
					console.log('Global.mainGroup().persons().each: ', person);

				});
*/
			});
		}
	});
})