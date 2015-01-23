define([], function(){
	console.log("ListItemView.js");

	return Backbone.View.extend({
		template: _.template($("#li_tag_ME").html()),
		text: '', cid_for_template_ME: '',
		initialize: function(options){
			this.text = options.text;
			this.cid_for_template_ME = options.cid_for_template_ME;
			this.render();
		},
		render: function(){
			var variables = { text: this.text, cid_for_template_ME: this.cid_for_template_ME };
    		var html = this.template(variables);
			$(this.el).append(html);
		}
	});
});