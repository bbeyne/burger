export class BurgersController {

	constructor(BurgerService, ToppingService, $routeParams,$location) {
		
		this.BurgerService=BurgerService
		this.ToppingService=ToppingService
		this.$location=$location
		this.ToppingService.getToppings()
		.then(toppings => this.toppings = toppings)
		this.BurgerService.getBurger($routeParams.id)
		.then(burger => this.burger = burger)
		.catch(err => console.error(err))
	}
	save (form) {
		if (form.$invalid) return
		if(this.burger.id!==null){
			this.BurgerService.save(this.burger)
			.then(() => this.$location.path('/'))
		}			
	}
	
}

