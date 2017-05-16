import {uniq, clone} from 'lodash'

export class BurgerController {

	constructor(BurgerService) {
		this.BurgerService=BurgerService
		this.burgers=[];
		BurgerService.getBurgers().then(burgers =>this.burgers=burgers);

		/*this.burgers = [
		{
			id:1,
			name: 'maxi b',
			toppings: ['steak', 'salad']
		},
		{
			id:2,
			name: 'hot',
			toppings: ['steak', 'pepper', 'spicy sauce']
		},
		{
			id:3,
			name: 'vegan',
			toppings: ['soja steak', 'salad', 'onions']
		},
		{
			id:4,
			name: 'crevard',
			toppings: ['steak']
		},
		{
			id:5,
			name: 'richard',
			toppings: ['steak', 'salad','cheese','tomate','pickle']
		}

		]*/
		this.col='name'
		this.desc=false
		this.newburger={id: null, name :'', toppings: []}
	}

	getToppings () {
		return uniq(this.burgers
			.reduce((acc, {toppings}) => [...acc, ...toppings], []))
	}
	sortBy (col){
		if (this.col !== col) this.desc = false
		else this.desc = !this.desc
			this.col = col
	}
	editBurger (burger){
		this.newburger=clone(burger);
	}
	save (form) {
		if (form.$invalid) return
		if(this.newburger.id!==null){
			let idx = this.burgers.findIndex(b => b.id === this.newburger.id)
			if (idx !== -1) {
				this.burgers[idx] = clone(this.newburger)
			}
		}
		else{
			let tampon={id : this.burgers.length+1 , name : this.newburger.name, toppings : this.newburger.toppings};
			this.burgers.push(tampon)
		}
		this.newburger={id: null, name :'', toppings: []};
		form.$setUntouched()
	}
	deleteburger(burger){
		console.log(burger)
		this.BurgerService.delete(burger)
		.then(()=>this.fetchBurgers())
	}
	 fetchBurgers() {
    this.BurgerService.getBurgers()
    .then(burgers => this.burgers = burgers)
  }
}


