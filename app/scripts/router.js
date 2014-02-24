var MainRouter = Backbone.Router.extend({
	routes:{
		'home': 'homePage',
		'about': 'aboutPage',  //never put in / or # ...***This is always assumed!!
		'rate': 'ratesPage', //each horse could have a name
		'forSale': 'forSalePage', //each horse could have a name
		'forSale/:name': 'forSalePage',
		'contact': 'contactPage',

	},

	initialize: function(){
		console.log('Booyah! A router is born!')
	},

	aboutPage: function(name){
		if(name){
			console.log('This is a page about ', name)
		} else{
			new AboutView();
		}	
	},

	//add a do something on clicking name
	forSalePage: function(name){ 
		new ForSaleView();
		// if(name){

		// } else {}
	},

	ratesPage: function(){

	}


});








//Homework:
// hook up some views to these routes
// 	5-6 routes
// 		view instaication in these routes
// 	 	use variables, nested
//codacedemny - learn API (do the turorials that are covered in javascript)


