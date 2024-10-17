import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { CompositedMeal } from "./composited-meal";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: CompositedMeal = new CompositedMeal()

  reset(): this {
    this._meal = new CompositedMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 6.56);
    const beans = new Beans('Feijão', 8.9);
    const meat = new Meat('Carne', 13);

    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const berage = new Beverage('Bebida', 7);
    this._meal.add(berage);
    return this
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 11);
    this._meal.add(dessert);
    return this
  }

  getMeal(): CompositedMeal {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}