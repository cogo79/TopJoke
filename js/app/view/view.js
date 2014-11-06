define(['app/view/AboutView', 'Global', 'app/view/JokeView', 'app/view/LoginView'], function(AboutView, Global, JokeView, LoginView){
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
			Global.setLogedInPerson(null);
			$('.miguels-custom-navbar-right').html('');
			$('.miguels-custom-navbar-right').html(_.template($("#navbar_right_when_NOT_loged_in").html()));
			goToHome();
			update();
		});
	}
	update();

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
})
