define(['app/model/Rating', 'app/model/Comment'], function(Rating, Comment){
	return Backbone.Model.extend({
		initialize: function() {
			
			Ratings = Backbone.Collection.extend({
				model: Rating
			});
			this.set('ratings', new Ratings);

			Comments = Backbone.Collection.extend({
				model: Comment
			});
			this.set('comments', new Comments);

			console.log('New joke created. Cid: ', this.cid);
		},
		ratings: function() {
			return this.get('ratings');
		},
		avarageRating: function() {
			return this.get('sumOfRatingPoints') / this.get('ratings').length;
		},
		comments: function() {
		return this.get('comments');
		},
		formatedDateString: function() {
			date = new Date(this.get("date"));
			return date.toLocaleString();
		},
		defaults: {
			"title" : "0",
			"joke" : "0",
			"PersonUsername" : null,
			"jokeAuthor_cid" : null,
			"date" : null,
			"sumOfRatingPoints" : 0
		}

	});
});