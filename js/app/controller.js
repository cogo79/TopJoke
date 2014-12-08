define(['app/view/AboutView', 'app/model/Model', 'app/view/JokeView', 'app/view/LoginView', 'app/view/SignUpView', 'app/view/SignInFailed_Alert_View', 'app/view/LoginWelcome_Alert_View', 'app/model/Person', 'app/model/Group', 'app/model/Joke'], function(AboutView, Model, JokeView, LoginView, SignUpView, SignInFailed_Alert_View, LoginWelcome_Alert_View, Person, Group, Joke){
	console.log("controller.js");
	
	Model.setMainGroup(new Group({"groupName" : "mainGroup"}));

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
			console.log("User \"" + Model.logedInPerson().get('username') + "\" signed out.");
			Model.setLogedInPerson(null);
			$('.htmlTag_login_welcome_ME').alert('close');
			$('.miguels-custom-navbar-right').html('');
			$('.miguels-custom-navbar-right').html(_.template($("#navbar_right_when_NOT_loged_in").html()));
			goToHome();
			update();
		});
	}

	var goToHome = function() {
		$('.joke-list').html('');
		Model.mainGroup().jokes().each(function(joke) {
			var title, joke, jokeAuthor;
			title = joke.get('title');
			jokeStr = joke.get('joke');
			jokeAuthor = joke.get('PersonUsername');
			new JokeView({ el: $(".joke-list"), title: title, joke: jokeStr, jokeAuthor: jokeAuthor});		
		});
	};

	var signIn = function() {
		var loginPerson = Model.mainGroup().persons().findWhere({
			email:$('#login_email_input').val(),
			password:$('#login_password_input').val(),
		});
		if (loginPerson) {
			loginPerson.set({
				rememberMe : $('#remember-me').is(':checked')
			});
			Model.setLogedInPerson(loginPerson);
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
		var person = new Person({
			"first name" : $(""),
			"username" : "micke",
			"password" : "nej422Jo",
			"email" : "micke.person@aftonbladet.se"
		});
	};

	var fillWithHardCodedData = function() {
		var miguel = new Person({
				"username" : "migobigo",
				"password" : "blabla222",
				"email" : "skumbag@playboy.com"
			});
			var jenny = new Person({
				"username" : "jenny",
				"password" : "nej444422",
				"email" : "jenny.janson@aftonbladet.se"
			});
			var micke = new Person({
				"username" : "micke",
				"password" : "nej422Jo",
				"email" : "micke.person@aftonbladet.se"
			});
			var pelle = new Person({
				"username" : "Pelle",
				"password" : "jajag heter pelle tamefan",
				"email" : "pelle.berggren@aftonbladet.se"
			});
			var cissela = new Person({
				"username" : "Cissela",
				"password" : "jajag heter pelle tamefan",
				"email" : "pelle.berggren@aftonbladet.se"
			});

			Model.mainGroup().persons().add(miguel);
			Model.mainGroup().persons().add(jenny);
			Model.mainGroup().persons().add(micke);
			Model.mainGroup().persons().add(pelle);
			Model.mainGroup().persons().add(cissela);

			var roosterGang = new Group({"groupName" : "Rooster gang"});
			roosterGang.persons().add(miguel);
			roosterGang.persons().add(jenny);
			Model.groups().add(roosterGang);

			var joke;
			joke = new Joke({"title" : "Bellboy",
				"joke" : "There was a church that had a bell that no one could ring. One day, a boy came and asked the priest if he could try. He went up into the tower and ran straight into the bell face-first. The bell tolled loud and clear. The priest gave him the job. One Sunday, the boy ran straight toward the bell with his face and missed, so he fell off the tower and died. \"Congregation,\" the priest said before the assembled masses. \"Does anybody know this boy's name? I don't know him, but his face rings a bell.\"",
				"date" : Date()
			});
			Model.addJokeToPerson(miguel, joke);
			Model.mainGroup().jokes().add(joke);

			joke = new Joke({"title" : "Rambo trufer",
				"joke" : "And then Rambo drew his gun and said 'Hasta la vista baby'. And terminator came and said 'Oh I´m shaking!'",
				"date" : Date()
			});
			Model.addJokeToPerson(miguel, joke);
			Model.mainGroup().jokes().add(joke);

			joke = new Joke({"title" : "Super Mario lovers",
				"joke" : "Mario jumped out of the screan and said to little Joe, 'Wanna go out and pick som mushrooms?'",
				"date" : Date()
			});
			Model.addJokeToPerson(miguel, joke);
			Model.mainGroup().jokes().add(joke);

			joke = new Joke({"title" : "Mo sistas",
				"joke" : "Jenifer just smiled and said to Mary. 'How´s you mo Joe runin?'",
				"date" : Date()
			});
			Model.addJokeToPerson(pelle, joke);
			Model.mainGroup().jokes().add(joke);

			joke = new Joke({"title" : "Zeldas last wish",
				"joke" : "As he finaly realized that his days where conted and the end was near, Billy droped by and said: 'Cheer up dude! I brought you some extra life. That will keep you going for at least another couple of days'",
				"date" : Date()
			});
			Model.addJokeToPerson(micke, joke);
			Model.mainGroup().jokes().add(joke);

			joke = new Joke({"title" : "Speed way",
				"joke" : "Is this a joking site? Well hell! Speed way is just such a joke that you don´t even need to joke about it.",
				"date" : Date()
			});
			Model.addJokeToPerson(micke, joke);
			Model.mainGroup().jokes().add(joke);
	};
	
	return {
		update : update,
		goToHome : goToHome,
		signIn : signIn,
		signUp : signUp,
		fillWithHardCodedData : fillWithHardCodedData
	}

});
