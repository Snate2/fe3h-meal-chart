export interface ICharacter {
  name: string;
  house: string;
  favoriteMeals: IMeal[];
}

export interface IMeal {
  name: string;
  ingredients: string[];
}
