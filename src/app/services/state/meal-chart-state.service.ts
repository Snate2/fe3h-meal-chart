// Angular
import { Injectable } from '@angular/core';

// Interfaces
import { ICharacter, IMeal } from '../../interfaces/meal-chart.interface';

// Rxjs
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MealChartStateService {
  private readonly blackEaglesRoster = new BehaviorSubject<ICharacter[]>([]);
  private readonly blueLionsRoster = new BehaviorSubject<ICharacter[]>([]);
  private readonly goldenDeerRoster = new BehaviorSubject<ICharacter[]>([]);
  private readonly churchOfSeirosRoster = new BehaviorSubject<ICharacter[]>([]);
  private readonly ashenWolvesRoster = new BehaviorSubject<ICharacter[]>([]);
  private readonly selectedCharacters = new BehaviorSubject<ICharacter[]>([]);

  private readonly meals = new BehaviorSubject<IMeal[]>([]);
  private readonly favoredMeals = new BehaviorSubject<IMeal[]>([]);

  getBlackEaglesRoster(): Observable<ICharacter[]> {
    return this.blackEaglesRoster.asObservable();
  }

  setBlackEaglesRoster(roster: ICharacter[]) {
    this.blackEaglesRoster.next(roster);
  }

  getBlueLionsRoster(): Observable<ICharacter[]> {
    return this.blueLionsRoster.asObservable();
  }

  setBlueLionsRoster(roster: ICharacter[]) {
    this.blueLionsRoster.next(roster);
  }

  getGoldenDeerRoster(): Observable<ICharacter[]> {
    return this.goldenDeerRoster.asObservable();
  }

  setGoldenDeerRoster(roster: ICharacter[]) {
    this.goldenDeerRoster.next(roster);
  }

  getChurchOfSeirosRoster(): Observable<ICharacter[]> {
    return this.churchOfSeirosRoster.asObservable();
  }

  setChurchOfSeirosRoster(roster: ICharacter[]) {
    this.churchOfSeirosRoster.next(roster);
  }

  getAshenWolvesRoster(): Observable<ICharacter[]> {
    return this.ashenWolvesRoster.asObservable();
  }

  setAshenWolvesRoster(roster: ICharacter[]) {
    this.ashenWolvesRoster.next(roster);
  }

  getSelectedCharacters(): Observable<ICharacter[]> {
    return this.selectedCharacters.asObservable();
  }

  setSelectedCharacters(roster: ICharacter[]) {
    this.selectedCharacters.next(roster);
  }

  getMeals(): Observable<IMeal[]> {
    return this.meals.asObservable();
  }

  setMeals(meals: IMeal[]) {
    this.meals.next(meals);
  }

  getFavoredMeals(): Observable<IMeal[]> {
    return this.favoredMeals.asObservable();
  }

  setFavoredMeals(FavoredMeals: IMeal[]) {
    this.favoredMeals.next(FavoredMeals);
  }
}
