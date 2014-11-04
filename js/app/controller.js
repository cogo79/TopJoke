define(['Global', 'app/view/JokeView', 'app/view/AboutView', 'app/view/LoginView'], function(Global, JokeView, AboutView, LoginView){
	$('.about').click(function() {
		$('.joke-list').html('');
		new AboutView({ el: $(".joke-list")});
	});
	$('.home').click(function() {
		$('.joke-list').html('');
		Global.mainGroup().jokes().each(function(joke) {
			var title, joke, jokeAuthor;
			title = joke.get('title');
			jokeStr = joke.get('joke');
			jokeAuthor = joke.get('PersonUsername');
			new JokeView({ el: $(".joke-list"), title: title, joke: jokeStr, jokeAuthor: jokeAuthor});		
		});
	});
	$('.signIn_SignOut').click(function() {
		$('.joke-list').html('');
		new LoginView({el: $('.joke-list')});
	});
});
























