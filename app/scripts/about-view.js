//HomeView:
var HomeView = Backbone.View.extend({
	createTemplate: _.template($('#home-template').text()),

	initialize: function(){
		$('.jumbotron').prepend(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});

//About View:
var AboutView = Backbone.View.extend({
	className: 'about-view',

	createTemplate: _.template($('#about-template').text()),

	initialize: function(){
		$('.jumbotron').prepend(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});

//For Sale View:
var ForSaleView = Backbone.View.extend({
	className: 'for-sale-view row',

	createTemplate: _.template($('#for-sale-template').text()),

	initialize: function(){
		$('.jumbotron').prepend(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});

//Rates View:
var RatesView = Backbone.View.extend({
	className: 'rates',

	createTemplate: _.template($('#rates-template').text()),

	initialize: function(){
		$('.jumbotron').prepend(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});

//Contact View
var ContactView = Backbone.View.extend({
	createTemplate: _.template($('#contact-template').text()),

	initialize: function(){
		$('.jumbotron').prepend(this.el);

		this.render();
	},

	render: function(){
		this.$el.html(this.createTemplate());
	}
});


