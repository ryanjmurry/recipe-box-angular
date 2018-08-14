import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // recipe: Recipe = {
  //   id: 1, name: 'Pizza', ingredients: ['dough', 'marinara sauce', 'cheese', 'pepperoni'], description: 'Throw all the stuff on the dough and place in oven until you think it is ready.'
  // }
  recipes = RECIPES;

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
