//how do you hookup views to seperate html pages? wouldnt you just create an href a new html page?
//I think I undestand implementing routers but..I need a contrete example of how they're used


var MainRouter = Backbone.Router.extend({
	routes:{
		'home': 'homePage',
		'about': 'aboutPage',  //never put in / or # ...***This is always assumed!!
		'rates': 'ratesPage', 
		'forSale': 'forSalePage', 
		'forSale/:name': 'forSalePage', //each horse could have a name and get an expanded class or something
		'contact': 'contactPage',

	},

	initialize: function(){
		console.log('Booyah! A router is born!');
	},

	homePage: function(){
		console.log('hmmmm');
		$('.jumbotron').html('');
		$('.jumbotron').append(new HomeView());
	},

	aboutPage: function(){
		$('.jumbotron').html('');
		$('.jumbotron').prepend(new AboutView());
	},

	ratesPage: function(){
		$('.jumbotron').html('');
		$('.jumbotron').prepend(new RatesView());
	},

	//add a do something on click name?
	forSalePage: function(name){ 
		$('.jumbotron').html('');
		$('.jumbotron').prepend(new ForSaleView());
		
		if(name){
			console.log(name);
		} else {
			console.log('Strange, are no ponies w/o a names, why does this showup?')
		}
	},

	contactPage: function(){
		$('.jumbotron').html('');
		$('.jumbotron').prepend(new ContactView());
	}
});








//Homework:
// hook up some views to these routes
// 	5-6 routes
// 		view instaication in these routes
// 	 	use variables, nested
//codacedemny - learn API (do the turorials that are covered in javascript)


