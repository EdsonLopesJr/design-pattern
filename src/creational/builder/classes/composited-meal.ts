import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class CompositedMeal implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach(item => this._children.push(item));
  }
};