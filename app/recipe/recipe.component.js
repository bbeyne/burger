import template from './recipe.component.html'

class controller {
    constructor () {
    }

    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            // on retourne le tableau (cloné) avant de l'afficher
            this.toppings = angular.copy(this.toppings).reverse();
            // reset timer
            this.time = {value: 20-this.level*2}
            //this.$timeout(() => this.time = 20, 0) 
        }
    }

    end () {
        this.onEnd({
            $event: "time's out"
        })
    }

    start (remain) {
        //this.time = 0 // ugly
        console.log(remain)
    }

}

export let RecipeComponent = {
    template,
    controller,
    bindings: {
        toppings: '<',
        onEnd: '&',
        level: '<'
    }
}
