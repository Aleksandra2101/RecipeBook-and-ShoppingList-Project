import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.simplyrecipes.com/thmb/guUt8eMy7mZn6Aw62nVMWSorQ3U=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg'),
      new Recipe('Another Test Recipe', 'This is simply a test',
      'https://www.simplyrecipes.com/thmb/guUt8eMy7mZn6Aw62nVMWSorQ3U=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected (recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);

  }

}
