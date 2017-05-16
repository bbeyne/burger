import template from './dta.burger.html'

class controller {
    constructor () {  
    }
    $onChanges (changes) {
        if (changes.toppings && changes.toppings.currentValue) {
            this.toppings = angular.copy(this.toppings);
        }
    }
}

export let DtaBurger = {
    template,
    controller,
    bindings: {
        toppings :"<"    }
}