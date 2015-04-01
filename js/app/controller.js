define(['app/view/AboutView', 'app/model/Model', 'app/view/JokeView', 'app/view/LoginView', 'app/view/SignUpView', 'app/view/SignInFailed_Alert_View', 'app/view/LoginWelcome_Alert_View', 'app/model/Person', 'app/model/Group', 'app/model/Joke', 'app/view/alert_danger_ME_View', 'app/view/GroupListItemView', 'app/view/NewJokeView'], function(AboutView, Model, JokeView, LoginView, SignUpView, SignInFailed_Alert_View, LoginWelcome_Alert_View, Person, Group, Joke, alert_danger_ME_View, GroupListItemView, NewJokeView){
	console.log("controller.js");
	
	Model.setMainGroup(new Group({"groupName" : "Main group"}));
	Model.setCurrentGroup(Model.mainGroup());

	var newJokeInputTemp = {title:"", text:""};

	var update = function() {
		$('.new_joke_ME').click(function() {
			$('.joke-list').html('');
			new NewJokeView({ el : $(".joke-list") });
			$('#add_new_joke_button_ME').click(newJokeButton_clicked);

			saveTemporaryBeforeUserAddsTheJoke = function () {
				$("#new_joke_text_ME").on("change keyup paste", function() {
					var currentVal = $("#new_joke_text_ME").val();
					if(currentVal == newJokeInputTemp.text) {
		     	  		return; //check to prevent multiple simultaneous triggers
		    		}
				    newJokeInputTemp.text = currentVal;
				    //action to be performed on textarea changed

				});
				$("#new_joke_title_ME").on("change keyup paste", function() {
					var currentVal = $("#new_joke_title_ME").val();
					if(currentVal == newJokeInputTemp.title) {
		     	  		return; //check to prevent multiple simultaneous triggers
		    		}
				    newJokeInputTemp.title = currentVal;
				    //action to be performed on textarea changed

				});
				$("#new_joke_text_ME").val(newJokeInputTemp.text);
				$("#new_joke_title_ME").val(newJokeInputTemp.title);
			};
			saveTemporaryBeforeUserAddsTheJoke();
		});

		$('.about').click(function() {
			$('.joke-list').html('');
			new AboutView({ el : $(".joke-list") });
		});
		$('.home').click(function() {
			goToHome();
		});
		$('.signIn').click(function() {
			$('.joke-list').html('');
			new LoginView({el: $('.joke-list')});
			$('#sing_in_button').click(signIn);
		});

		$('.signUp').click(function() {
			$('.joke-list').html('');
			new SignUpView({el: $('.joke-list')});
			$('#sing_up_button').click(signUp);
		});

		$('.signOut').click(function() {
			console.log("User \"" + Model.logedInPerson().get('username') + "\" signed out.");
			Model.signOut();
			$('.htmlTag_login_welcome_ME').alert('close');
			$('.custom_navbar_ME').html('');
			$('.custom_navbar_ME').html(_.template($("#navbar_when_NOT_loged_in").html()));
			goToHome();
			update();
		});
	}

	var newJokeButton_clicked = function() {
		if ($("#new_joke_title_ME").val().localeCompare('') == 0) {
			return;
		}
		if ($("#new_joke_text_ME").val().localeCompare('') == 0) {
			return;
		}
		console.log("New joke button clicked.");
		var joke;
		joke = new Joke({"title" : $("#new_joke_title_ME").val(),
			"joke" : $("#new_joke_text_ME").val(),
			"date" : Date()
		});
		Model.addJokeToPerson(Model.logedInPerson(), joke);
		Model.currentGroup().jokes().add(joke, { at: 0 });
		goToHome();
		newJokeInputTemp.title = ""; newJokeInputTemp.text = "";
	};

	var goToHome = function() {
		$('.joke-list').html('');
		var jokeView;
		Model.currentGroup().jokes().each(function(joke) {
			var title, jokeStr, cid, jokeAuthor;
			title = joke.get('title');
			jokeStr = joke.get('joke');
			cid = joke.cid;
			jokeAuthor = joke.get('PersonUsername');
			jokeView = new JokeView({ el: $(".joke-list"), jokeModel_cid: "jokeTemplateCid_" + cid, title: title, joke: jokeStr, jokeAuthor: jokeAuthor, date: joke.formatedDateString()});
			//console.log("jokeView: ", jokeView);
			//jokeView.$(".joke_tag_ME").attr("id", "jokeTemplateCid_" + cid);
		});
		
		
	};

	var updateDropdownMenuForGroups = function() {
		
		$("#selected_group_ME").html(Model.currentGroup().get("groupName"));
		
		$(".group_dropdown_menu_ME").html('');
		Model.logedInPerson().groups().each(function(group) {
			new GroupListItemView({ el: $(".group_dropdown_menu_ME"), text: group.get("groupName"), groupCidForTemplate_ME: group.cid});
		});
		
		$(".group_listItem_ME").each(function( index ) {
  			$(this).click(function() {
  				Model.setCurrentGroup(Model.logedInPerson().groups().get({ cid : $(this).find(".groupCid_ME").text() }));
  				updateDropdownMenuForGroups();
  				goToHome();
  			});
		});

	};

	var signInUser = function(person) {
		Model.setLogedInPerson(person);
			//$('.custom_navbar_ME').html('');
			$('.custom_navbar_ME').html(_.template($("#navbar_when_loged_in").html()));

			Model.setCurrentGroup(Model.mainGroup());
			updateDropdownMenuForGroups();

			update();
			goToHome();

			new LoginWelcome_Alert_View({ el: $("body"), username: person.get('username')});

	};

	var signIn = function() {
		console.log("sign in button clicked ;D");
		var loginPerson = Model.mainGroup().persons().findWhere({
			email:$('#login_email_input').val(),
			password:$('#login_password_input').val(),
		});
		if (loginPerson) {
			loginPerson.set({
				rememberMe : $('#remember-me').is(':checked')
			});
			signInUser(loginPerson);

		} else {

			var count = 1;
			console.log("Login failed " + count++);
			$('#loginAlertContainer').html('');
			new SignInFailed_Alert_View({el:$("#loginAlertContainer")});

		}
	};

	var signUp = function() {
		console.log("signUp");

		if ($(".username_signUpForm_ME").val().localeCompare('') == 0) {
			return;
		}
		if ($(".email_signUpForm_ME").val().localeCompare('') == 0) {
			return;
		}
		if ($(".password_signUpForm_ME").val().localeCompare('') == 0) {
			return;
		}
		if ($(".repeatPassword_signUpForm_ME").val().localeCompare('') == 0) {
			return;
		}

		var checkIfUsernameIsTaken = function(usernameStr) {
			var person = Model.mainGroup().persons().findWhere({
				username : usernameStr
			});
			if (person) {
				return true;
			} else {
				return false;
			}
		};
		
		if (checkIfUsernameIsTaken($(".username_signUpForm_ME").val()) == true) {
			$('#SignUpAlertContainer_ME').html('');
			new alert_danger_ME_View({ el: $("#SignUpAlertContainer_ME"), alertText: "Username '" + $(".username_signUpForm_ME").val() + "' is already taken."});
		} else if ($(".password_signUpForm_ME").val().localeCompare($(".repeatPassword_signUpForm_ME").val()) != 0) {
			$('#SignUpAlertContainer_ME').html('');
			new alert_danger_ME_View({ el: $("#SignUpAlertContainer_ME"), alertText: "Passwords did not match."});
		} else {
			var person = new Person({
				"first name" : $(".firstName_signUpForm_ME").val(),
				"surname" : $(".surname_signUpForm_ME").val(),
				"username" : $(".username_signUpForm_ME").val(),
				"email" : $(".email_signUpForm_ME").val(),
				"phone number" : $(".phoneNumber_signUpForm_ME").val(),
				"password" : $(".password_signUpForm_ME").val(),
				"bio" : $(".bio_signUpForm_ME").val()
			});
			Model.mainGroup().persons().add(person);
			signInUser(person);
		}
		
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

		Model.mainGroup().addPerson(miguel);
		Model.mainGroup().addPerson(jenny);
		Model.mainGroup().addPerson(micke);
		Model.mainGroup().addPerson(pelle);
		Model.mainGroup().addPerson(cissela);

		var roosterGang = new Group({"groupName" : "Rooster gang"});
		roosterGang.addPerson(miguel);
		roosterGang.addPerson(micke);
		Model.groups().add(roosterGang);

		var dreamTeam = new Group({"groupName" : "Dream Team"});
		dreamTeam.addPerson(miguel);
		dreamTeam.addPerson(micke);
		Model.groups().add(dreamTeam);

		var joke;
		joke = new Joke({"title" : "Homework",
			"joke" : "Me: should I get into trouble for something I didn't do?<br>Teacher: No<br>Me: Good, because I didn't do my homework.",
			"date" : Date()
		});
		Model.addJokeToPerson(miguel, joke);
		dreamTeam.jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Lovers",
			"joke" : "Boyfriend: Bitch<br>Girlfriend: I been called worse<br>Boyfriend: Like what<br>Girlfriend: your girlfriend",
			"date" : Date()
		});
		Model.addJokeToPerson(miguel, joke);
		dreamTeam.jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Wifi",
			"joke" : "Wifi went down for five minutes, so i had to talk to my family. They seem like nice people.",
			"date" : Date()
		});
		Model.addJokeToPerson(micke, joke);
		dreamTeam.jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Rambo",
			"joke" : "And then Rambo drew his gun and said 'Hasta la vista baby'. And terminator came and said 'Oh I´m shaking!'",
			"date" : Date()
		});
		Model.addJokeToPerson(miguel, joke);
		Model.mainGroup().jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Super Mario lovers",
			"joke" : "Mario jumped out of the screan and said to little Joe, 'Wanna go out and pick som mushrooms?'",
			"date" : Date()
		});
		Model.addJokeToPerson(miguel, joke);
		Model.mainGroup().jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Mo sistas",
			"joke" : "Jenifer just smiled and said to Mary. 'How´s you mo Joe runin?'",
			"date" : Date()
		});
		Model.addJokeToPerson(pelle, joke);
		Model.mainGroup().jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Zeldas last wish",
			"joke" : "As he finaly realized that his days where conted and the end was near, Billy droped by and said: 'Cheer up dude! I brought you some extra life. That will keep you going for at least another couple of days'",
			"date" : Date()
		});
		Model.addJokeToPerson(micke, joke);
		Model.mainGroup().jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Speed way",
			"joke" : "Is this a joking site? Well hell! Speed way is just such a joke that you don´t even need to joke about it.",
			"date" : Date()
		});
		Model.addJokeToPerson(micke, joke);
		Model.mainGroup().jokes().add(joke, { at: 0 });

		joke = new Joke({"title" : "Bellboy",
			"joke" : "There was a church that had a bell that no one could ring. One day, a boy came and asked the priest if he could try. He went up into the tower and ran straight into the bell face-first. The bell tolled loud and clear. The priest gave him the job. One Sunday, the boy ran straight toward the bell with his face and missed, so he fell off the tower and died. \"Congregation,\" the priest said before the assembled masses. \"Does anybody know this boy's name? I don't know him, but his face rings a bell.\"",
			"date" : Date()
		});
		Model.addJokeToPerson(miguel, joke);
		Model.mainGroup().jokes().add(joke, { at: 0 });
		
	};
	
	return {
		update : update,
		newJokeButton_clicked: newJokeButton_clicked,
		goToHome : goToHome,
		signIn : signIn,
		signUp : signUp,
		fillWithHardCodedData : fillWithHardCodedData
	}

});
