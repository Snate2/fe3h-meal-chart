// Angular
import { Injectable } from '@angular/core';

// Enums
import { GarregMachHouses } from '../../enums/garreg-mach-houses.enum';

// Interfaces
import { ICharacter } from '../../interfaces/meal-chart.interface';

// Services
import { MealChartStateService } from '../state/meal-chart-state.service';

@Injectable()
export class MealChartRosterInitializerService {
  constructor(
    private readonly mealChartStateService: MealChartStateService,
  ) {}

  initializeHouseRosters() {
    this.initializeBlackEagles();
    this.initializeBlueLions();
    this.initializeGoldenDeer();
    this.initializeChurchOfSeiros();
    this.initializeAshenWolves();
  }

  private initializeBlackEagles() {
    const blackEagles: ICharacter[] = [
      {
        name: 'Edelgard',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
      {
        name: 'Hubert',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
      {
        name: 'Ferdinand',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
      {
        name: 'Linhardt',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
      {
        name: 'Caspar',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
      {
        name: 'Bernadetta',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
      {
        name: 'Dorothea',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
      {
        name: 'Petra',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [],
      },
    ];

    this.mealChartStateService.setBlackEaglesRoster(blackEagles);
  }

  private initializeBlueLions() {
    const blueLions: ICharacter[] = [
      {
        name: 'Dimitri',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
      {
        name: 'Dedue',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
      {
        name: 'Felix',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
      {
        name: 'Ashe',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
      {
        name: 'Sylvain',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
      {
        name: 'Mercedes',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
      {
        name: 'Annette',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
      {
        name: 'Ingrid',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [],
      },
    ];

    this.mealChartStateService.setBlueLionsRoster(blueLions)
  }

  private initializeGoldenDeer() {
    const goldenDeer: ICharacter[] = [
      {
        name: 'Claude',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
      {
        name: 'Hilda',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
      {
        name: 'Lorenz',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
      {
        name: 'Raphael',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
      {
        name: 'Ignatz',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
      {
        name: 'Lysithea',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
      {
        name: 'Marianne',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
      {
        name: 'Leonie',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [],
      },
    ];

    this.mealChartStateService.setGoldenDeerRoster(goldenDeer)
  }

  private initializeChurchOfSeiros() {
    const churchOfSeiros: ICharacter[] = [
      {
        name: 'Seteth',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Flayn',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Hanneman',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Manuela',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Alois',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Catherine',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Shamir',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Cyril',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
    ];

    this.mealChartStateService.setChurchOfSeirosRoster(churchOfSeiros);
  }

  private initializeAshenWolves() {
    const ashenWolves = [
      {
        name: 'Yuri',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Balthus',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Constance',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
      {
        name: 'Hapi',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [],
      },
    ];

    this.mealChartStateService.setAshenWolvesRoster(ashenWolves);
  }
}
