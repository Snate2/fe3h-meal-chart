// Angular
import { Injectable } from '@angular/core';

// Constants
import { Meals } from '../../constants/meals.constant';

// Enums
import { GarregMachHouses } from '../../enums/garreg-mach-houses.enum';
import { Menu } from '../../enums/menu.enum';

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
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FishSandwich],
          Meals[Menu.PeachSorbet],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.VegetableStirFry],
        ],
      },
      {
        name: 'Hubert',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [
          Meals[Menu.SauteedJerky],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.CabbageAndHerringStew],
        ],
      },
      {
        name: 'Ferdinand',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.SaghertAndCream],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.FishSandwich],
          Meals[Menu.DaphnelStew],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Linhardt',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.PeachSorbet],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GautierCheeseGratin],
        ],
      },
      {
        name: 'Caspar',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SauteedJerky],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Bernadetta',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.PeachSorbet],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Dorothea',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.PeachSorbet],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.VegetableStirFry],
        ],
      },
      {
        name: 'Petra',
        house: GarregMachHouses.BlackEagles,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.GrilledHerring],
          Meals[Menu.SauteedJerky],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.FishermansBounty],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.FishSandwich],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.VegetableStirFry],
        ],
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
        favoriteMeals: [
          {
            name: 'Small Fish Skewers',
            ingredients: [
              '3 Airmid Gobies',
            ],
          },
        ],
      },
    ];

    this.mealChartStateService.setAshenWolvesRoster(ashenWolves);
  }
}
