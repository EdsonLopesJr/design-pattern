import { MainDishBuilder } from "./classes/main-dish-builder";

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset()
const meal2 = mainDishBuilder.makeBeverage().getMeal();

console.log(meal2);