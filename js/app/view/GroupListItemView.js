define([], function(){
	console.log("GroupListItemView.js");

	return Backbone.View.extend({
		template: _.template($("#group_liTagTemplate_ME").html()),
		text: '', groupCidForTemplate_ME: '',
		initialize: function(options){
			this.text = options.text;
			this.groupCidForTemplate_ME = options.groupCidForTemplate_ME;
			this.render();
		},
		render: function(){
			var variables = { text: this.text, groupCidForTemplate_ME: this.groupCidForTemplate_ME };
    		var html = this.template(variables);
			$(this.el).append(html);
		}
	});
});