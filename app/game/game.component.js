import './game.component.css'
import template from './game.component.html'

class controller {
    constructor (ToppingService) {
        this.ToppingService = ToppingService
    }

    $onInit () {
    	this.restart()
        this.level=0;
        this.ToppingService.getToppings()
        .then(toppings => this.toppings = toppings);

    }

    selectTopping (topping) {
        this.burger = [topping,...this.burger]
        const check = this.ToppingService.checkRecipe(this.burger, this.recipe)
        if (check === 'VALID') {
            this.level=this.level+1;
            this.running=1
        }
        if (check === 'INVALID') {
            this.gameover()
        }
    }
    selectRecipe (recipe) {
        alert(recipe)
        this.gameover()
    }
     restart () {
        this.burger = []
        this.recipe = []
        this.running = 0
        this.ToppingService.getrecipe()
        .then(recipe => this.recipe = recipe)
    }

    gameover () {
        this.level=0;
        this.running = -1
    }
}

export let GameComponent = {
    template,
    controller,
    bindings: {}
}
