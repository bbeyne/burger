const API_URL = 'http://localhost:3000/toppings'

export class ToppingService {
  constructor ($http,$q) {
  	this.$http=$http;
  	this.$q=$q
  	this.recipe=[]
  }

  getToppings () {
  		if (this.toppings){
  			return this.$q.resolve(this.toppings)
  		}

      return this.$http.get(API_URL)
    		.then(response => response.data)
    		.then(toppings=>{
    			this.toppings=toppings
    			return toppings
    		})
  }
	getrecipe(){

	return this.getToppings()
	.then(toppings => toppings.map( t=>t.name))
	.then(toppings =>{
		let max_ingr=[0,0,0,0,0,0,0,0,0,0,0,0];
		let nb_ingr =Math.floor(Math.random()*4)+3;
		
		for (let i=0; i<nb_ingr;i++){
			let ingr=Math.floor(Math.random()*toppings.length);
			while (max_ingr[ingr]==2){
				ingr=Math.floor(Math.random()*toppings.length);
			}
			this.recipe[i]=toppings[ingr];
			max_ingr[ingr]+=1;
		}
		return this.recipe;
	});
}	
	checkRecipe (burger, recipe) {
        for (let i = 0; i < burger.length; i++) {
            if (burger[burger.length-1-i] !== recipe[recipe.length-1-i]) return 'INVALID'
        }
        if (burger.length === recipe.length) return 'VALID'
        return 'RUNNING'
    }


}