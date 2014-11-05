define(['Global', 'app/view/JokeView', 'app/view/AboutView', 'app/view/LoginView', 'app/model/Joke'], function(Global, JokeView, AboutView, LoginView, Joke){
	$('.about').click(function() {
		$('.joke-list').html('');
		new AboutView({ el: $(".joke-list")});
	});
	$('.home').click(function() {
		goToHomee();
		/*
		$('.joke-list').html('');
		Global.mainGroup().jokes().each(function(joke) {
			var title, joke, jokeAuthor;
			title = joke.get('title');
			jokeStr = joke.get('joke');
			jokeAuthor = joke.get('PersonUsername');
			new JokeView({ el: $(".joke-list"), title: title, joke: jokeStr, jokeAuthor: jokeAuthor});		
		});
	*/
	});
	$('.signIn').click(function() {
		$('.joke-list').html('');
		new LoginView({el: $('.joke-list')});
	});
	var goToHomee = function() {
		$('.joke-list').html('');
		Global.mainGroup().jokes().each(function(joke) {
			var title, joke, jokeAuthor;
			title = joke.get('title');
			jokeStr = joke.get('joke');
			jokeAuthor = joke.get('PersonUsername');
			new JokeView({ el: $(".joke-list"), title: title, joke: jokeStr, jokeAuthor: jokeAuthor});		
		});
	};
	return {// public interface
		goToHome : goToHomee
	};
});
























