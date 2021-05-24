import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe","A test Recipe","https://th.bing.com/th/id/OIP.D7CM2Z6_ITS7nZNSq3vwigHaHa?pid=ImgDet&rs=1")
  ];
  constructor() {}

  ngOnInit(): void {}
}
