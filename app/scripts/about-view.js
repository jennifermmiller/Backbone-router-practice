//About View:
var AboutView = Backbone.View.extend({
	className: 'about-view',

	createTemplate: _.template($('#about-template').text()),

	initialize: function(){
		$('.add-about').prepend(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});

//For Sale View:
var ForSaleView = Backbone.View.extend({
	className: 'forSale-view',

	createTemplate: _.template($('#for-sale-template').text()),

	initialize: function(){
		$('.add-for-sale').prepend(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});