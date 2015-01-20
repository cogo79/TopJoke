define([], function(){
	console.log("ListItemView.js");

	return Backbone.View.extend({
		template: _.template($("#li_tag_ME").html()),
		text: '',
		initialize: function(options){
			this.text = options.text;
			this.render();
		},
		render: function(){
			var variables = { text: this.text };
    		var html = this.template(variables);
			$(this.el).append(html);
			
			require(['app/controller'], function(controller) {
				controller.update();
			});
		}
	});
});