import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'De Volaille',
      imageUrl: 'https://cdn.katalogsmakow.pl/2015/10/24/0x600/kotlet-de-volaille-z-ziemniakami-i-buraczkami.369609.jpg',
      ingredients: ['chicken breast', 'bread crumbs', 'eggs', 'butter', 'oil', 'parsley', 'garlic']
    },
    {
      id: 'r2',
      title: 'Asian Lettuce Wraps',
      imageUrl: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Asian-Turkey-Lettuce-Cups_exps162151_SD132778B04_09_3bC_RMS.jpg',
      ingredients: ['tablespoon olive oil', 'ground chicken', 'garlic', 'onion', 'hoisin sauce', 'soy sauce', 'rice wine vinegar', 'grated ginger']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
