import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


   private  recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
          'This is simply a test',
          'https://www.simplyrecipes.com/thmb/guUt8eMy7mZn6Aw62nVMWSorQ3U=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg',
          [ 
              new Ingredient('Meat',1),
              new Ingredient('French fries',20)
        ]),
          
          new Recipe('Another Test Recipe', 'This is simply a test',
          'https://www.simplyrecipes.com/thmb/guUt8eMy7mZn6Aw62nVMWSorQ3U=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg',
          [
            new Ingredient('Buns',2), 
            new Ingredient('Meat',1)
          ])

      ];
      constructor (private slService:ShoppingListService){}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index:number) {
        return this.recipes[index];
      }
      
      addIngredientsToShoppingList(ingredients:Ingredient[]){
         this.slService.addIngredients(ingredients);
      }
}