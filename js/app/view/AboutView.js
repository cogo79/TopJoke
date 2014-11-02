define([], function() {
	return Backbone.View.extend({
		template: _.template($("#aboutPage").html()),
		aboutPageText: "Yeah! This is a joking site where you can joke as much as you wan't. Enjoy! ;D",
		initialize: function(){
			this.render();
		},
		render: function(){
            var variables = { aboutPageText: this.aboutPageText };
    		var html = this.template(variables);
			$(this.el).append(html);
        }
    });
})