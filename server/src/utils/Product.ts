import {IngredientAmountInput} from "../generated/ResolversType";

export class Product {
    public static checkDuplicateIngredient(ingredients: IngredientAmountInput[]): boolean {
        return ingredients.some(({ingredient: ingredientId}, index) => {
            const indexOfFirstIngredientAmountContainsIngredient = ingredients.findIndex(({ingredient: id}) => id === ingredientId);
            return indexOfFirstIngredientAmountContainsIngredient !== index;
        })
    }
}