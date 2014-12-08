require(['app/controller'], function(controller) {
	
	controller.fillWithHardCodedData();

	$('.miguels-custom-navbar-right').html(_.template($("#navbar_right_when_NOT_loged_in").html()));
	controller.goToHome();
	controller.update();
	
	return {
		signIn : controller.signIn,
		signUp : controller.signUp
	}
});