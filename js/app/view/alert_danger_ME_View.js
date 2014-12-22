define([], function(){
	console.log("alert_danger_ME_View.js");

	return Backbone.View.extend({
		template: _.template($("#alert_danger_ME").html()),
		alertText: '',
		initialize: function(options){
			this.alertText = options.alertText;
			this.render();
		},
		render: function(){
			var variables = {alertText:this.alertText};
			var html = this.template(variables);
			$(this.el).append(html);
			
		}
	});
});
