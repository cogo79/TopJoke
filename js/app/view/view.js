define(['app/view/AboutView', 'Global', 'app/view/JokeView', 'app/view/LoginView'], function(AboutView, Global, JokeView, LoginView){
	console.log("view.js");
	
	var update = function() {
		$('.about').click(function() {
			$('.joke-list').html('');
			new AboutView({ el: $(".joke-list")});
		});
		$('.home').click(function() {
			goToHome();
		});

		$('.signIn').click(function() {
			$('.joke-list').html('');
			new LoginView({el: $('.joke-list')});
		});
		$('.signOut').click(function() {
			console.log("User " + Global.logedInPerson().get('username') + " signed out.");
			Global.setLogedInPerson(null);
			$('.miguels-custom-navbar-right').html('');
			$('.miguels-custom-navbar-right').html(_.template($("#navbar_right_when_NOT_loged_in").html()));
			goToHome();
			update();
		});
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
				update();
				goToHome();
			}
		});
	}

	var goToHome = function() {
		$('.joke-list').html('');
		Global.mainGroup().jokes().each(function(joke) {
			var title, joke, jokeAuthor;
			title = joke.get('title');
			jokeStr = joke.get('joke');
			jokeAuthor = joke.get('PersonUsername');
			new JokeView({ el: $(".joke-list"), title: title, joke: jokeStr, jokeAuthor: jokeAuthor});		
		});
	};
	
	return {
		update : update,
		goToHome : goToHome
	}

});
