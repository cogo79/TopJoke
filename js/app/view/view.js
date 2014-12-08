define(['app/view/AboutView', 'Global', 'app/view/JokeView', 'app/view/LoginView', 'app/view/SignUpView', 'app/view/SignInFailed_Alert_View', 'app/view/LoginWelcome_Alert_View'], function(AboutView, Global, JokeView, LoginView, SignUpView, SignInFailed_Alert_View, LoginWelcome_Alert_View){
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
		$('#sing_in_button').click(signIn);

		$('.signUp').click(function() {
			$('.joke-list').html('');
			new SignUpView({el: $('.joke-list')});
		});
		$('#sing_up_button').click(signUp);

		$('.signOut').click(function() {
			console.log("User \"" + Global.logedInPerson().get('username') + "\" signed out.");
			Global.setLogedInPerson(null);
			$('.htmlTag_login_welcome_ME').alert('close');
			$('.miguels-custom-navbar-right').html('');
			$('.miguels-custom-navbar-right').html(_.template($("#navbar_right_when_NOT_loged_in").html()));
			goToHome();
			update();
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

	var signIn = function() {
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

			new LoginWelcome_Alert_View({ el: $("body"), username: loginPerson.get('username')});		
		} else {

			new SignInFailed_Alert_View({el:$(".joke-list")});
		}
	};

	var signUp = function() {
		
		$(function () {
  $('[data-toggle="popover"]').popover()
})
		
		$('.firstName_signUpForm_ME').popover();
	};
	
	return {
		update : update,
		goToHome : goToHome,
		signIn : signIn,
		signUp : signUp
	}

});
