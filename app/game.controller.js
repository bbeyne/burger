export class GameController {
  constructor (ToppingService) {
    this.ToppingService = ToppingService
    this.Toppings=[];
    ToppingService.getToppings().then(Toppings =>this.Toppings=Toppings);
    ToppingService.getrecipe().then(recipe =>this.recipe=recipe)
  }

}