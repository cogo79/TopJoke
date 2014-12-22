define([], function() {
	return Backbone.View.extend({
		template: _.template($("#aboutPage_ME").html()),
		aboutPage_METext: "Yeah! This is a joking site where you can joke as much as you wan't. Enjoy! ;D",
		initialize: function(){
			this.render();
		},
		render: function(){
            var variables = { aboutPage_METext: this.aboutPage_METext };
    		var html = this.template(variables);
			$(this.el).append(html);
        }
    });
})