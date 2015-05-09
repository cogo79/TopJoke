require(['app/controller'], function(controller) {
	console.log('app');
	
	controller.fillWithHardCodedData();

	$('.custom_navbar_ME').html(_.template($("#navbar_when_NOT_loged_in").html()));
	controller.goToHome();
	controller.update();
	
	return {
		newJokeButton_clicked: controller.newJokeButton_clicked,
		signIn : controller.signIn,
		signUp : controller.signUp
	}
});







