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
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.SauteedJerky],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.GautierCheeseGratin],
        ],
      },
      {
        name: 'Dedue',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.SauteedJerky],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.FishermansBounty],
          Meals[Menu.FishSandwich],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DaphnelStew],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Felix',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.SauteedJerky],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Ashe',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.FishSandwich],
          Meals[Menu.PeachSorbet],
        ],
      },
      {
        name: 'Sylvain',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.FishSandwich],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.SauteedPheasantAndEggs],
        ],
      },
      {
        name: 'Mercedes',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.PeachSorbet],
          Meals[Menu.TwoFishSaute],
        ],
      },
      {
        name: 'Annette',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.PeachSorbet],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.VegetableStirFry],
        ],
      },
      {
        name: 'Ingrid',
        house: GarregMachHouses.BlueLions,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.GrilledHerring],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.FishSandwich],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
    ];

    this.mealChartStateService.setBlueLionsRoster(blueLions)
  }

  private initializeGoldenDeer() {
    const goldenDeer: ICharacter[] = [
      {
        name: 'Claude',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.SauteedJerky],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Hilda',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FishermansBounty],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.PeachSorbet],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Lorenz',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DaphnelStew],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Raphael',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.SauteedJerky],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.FishSandwich],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Ignatz',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.FishermansBounty],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Lysithea',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.PeachSorbet],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Marianne',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.FishermansBounty],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PeachSorbet],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Leonie',
        house: GarregMachHouses.GoldenDeer,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.GrilledHerring],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.FishermansBounty],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.FishSandwich],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
    ];

    this.mealChartStateService.setGoldenDeerRoster(goldenDeer)
  }

  private initializeChurchOfSeiros() {
    const churchOfSeiros: ICharacter[] = [
      {
        name: 'Seteth',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.FishSandwich],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.DaphnelStew],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.BourgeoisPike],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Flayn',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.FishSandwich],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.PeachSorbet],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Hanneman',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PeachSorbet],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.BourgeoisPike],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Manuela',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.SauteedJerky],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.FishermansBounty],
          Meals[Menu.FishSandwich],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.BourgeoisPike],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Alois',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.FishSandwich],
          Meals[Menu.PeachSorbet],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Catherine',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.GrilledHerring],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.FishermansBounty],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.FishSandwich],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.BourgeoisPike],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Shamir',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SauteedJerky],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PeachSorbet],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.VegetableStirFry],
        ],
      },
      {
        name: 'Cyril',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SauteedJerky],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
    ];

    this.mealChartStateService.setChurchOfSeirosRoster(churchOfSeiros);
  }

  private initializeAshenWolves() {
    const ashenWolves = [
      {
        name: 'Yuri',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.GrilledHerring],
          Meals[Menu.SaghertAndCream],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.SauteedJerky],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.FishSandwich],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.PeachSorbet],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.DaphnelStew],
          Meals[Menu.VegetableStirFry],
        ],
      },
      {
        name: 'Balthus',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.SauteedJerky],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.GarregMachMeatPie],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.CheesyVeronaStew],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.GautierCheeseGratin],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
      {
        name: 'Constance',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.SaghertAndCream],
          Meals[Menu.VegetablePastaSalad],
          Meals[Menu.SweetBunTrio],
          Meals[Menu.FruitAndHerringTart],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.PeachSorbet],
          Meals[Menu.TwoFishSaute],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.BourgeoisPike],
        ],
      },
      {
        name: 'Hapi',
        house: GarregMachHouses.ChurchOfSeiros,
        favoriteMeals: [
          Meals[Menu.BeastMeatTeppanyaki],
          Meals[Menu.FishAndBeanSoup],
          Meals[Menu.SmallFishSkewers],
          Meals[Menu.SauteedJerky],
          Meals[Menu.SpicyFishAndTurnipStew],
          Meals[Menu.OnionGratinSoup],
          Meals[Menu.SweetAndSaltyWhitefishSaute],
          Meals[Menu.FishermansBounty],
          Meals[Menu.PheasantRoastWithBerrySauce],
          Meals[Menu.FishSandwich],
          Meals[Menu.PickledRabbitSkewers],
          Meals[Menu.CountryStyleRedTurnipPlate],
          Meals[Menu.SuperSpicyFishDango],
          Meals[Menu.PickledSeafoodAndVegetables],
          Meals[Menu.DaphnelStew],
          Meals[Menu.GronderMeatSkewers],
          Meals[Menu.SauteedPheasantAndEggs],
          Meals[Menu.CabbageAndHerringStew],
          Meals[Menu.VegetableStirFry],
          Meals[Menu.FriedCrayfish],
          Meals[Menu.DerdriuStyleFriedPheasant],
        ],
      },
    ];

    this.mealChartStateService.setAshenWolvesRoster(ashenWolves);
  }
}
