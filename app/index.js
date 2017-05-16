import angular from 'angular';
import css from 'bootstrap/dist/css/bootstrap.css';
import RouteModule from 'angular-route'
/*import GravatarModule from './gravatar'*/
import Countdown from './countdown'
import {GameComponent} from './game/game.component'
import {DtaBurger} from './game/dta.burger'
import {RecipeComponent} from './recipe/recipe.component'
/*
import {BurgersController} from './Burgers.controller.js';
import {BurgerController} from './Burger.controller.js';
import {VersionController} from './version.controller.js';
import {TabsController} from './tab.controller.js';
import {GameController} from './game.controller';*/
import { BurgerService } from './burger.service';
import { ToppingService } from './topping.service';
import { ToppingsComponent } from './toppings/toppings.component'


angular.module('app',[
	Countdown,
/*	RouteModule
	GravatarModule,
	GameModule*/
])
.component('dtaToppings', ToppingsComponent)
.component('dtaGame', GameComponent)
.component('dtaBurger', DtaBurger)
.component('dtaRecipe', RecipeComponent)
.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)
/*
.controller('MyController', class MyController {
    constructor () {
        this.mail = 'egorgecochon@gmal.com'
    }
    talk (ggg){
    	console.log(ggg)
    }
})

.controller('BurgerController',BurgerController)
.controller('BurgersController',BurgersController)
.controller('VersionController',VersionController)
.controller('TabsController',TabsController)
.controller('GameController',GameController)
.filter('reverse',function(){
	return function(blabla){
		
		return blabla.split("")
				.reverse()
				.join('');
	}

})
*/

/*.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true)

	$routeProvider

	.when('/game', {
		controller: 'GameController',
		templateUrl :"views/application.html",
		controllerAs : '$ctrl'
	})
	.when('/', {
		controller: 'BurgerController',
		templateUrl :"views/burger.html",
		controllerAs : '$ctrl'
	})
	.when('/burger/:id?', {
        controller: 'BurgersController',
        templateUrl: 'views/burgerdetail.html',
        controllerAs: '$ctrl'
    })
    .otherwise({
    	redirectTo :'/'
    })
});*/
/*
.run(function(){
	console.log('RUN ANGULAR');
});*/

