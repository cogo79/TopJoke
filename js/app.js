require(['app/Controller', 'app/view/view'], function(Controller, view) {
	
	Controller.fillWithHardCodedData();

	$('.miguels-custom-navbar-right').html(_.template($("#navbar_right_when_NOT_loged_in").html()));
	view.goToHome();
	view.update();
	
	return {
		signIn : view.signIn
	}
});