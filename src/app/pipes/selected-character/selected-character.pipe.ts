import { Pipe } from '@angular/core';
import { ICharacter } from '../../interfaces/meal-chart.interface';

@Pipe({
  name: 'selectedCharacterPipe',
})
export class SelectedCharacterPipe {
  transform(character: ICharacter, selectedCharacters: ICharacter[] | null): boolean {
    return Boolean(
      selectedCharacters?.find((selectedCharacter: ICharacter) => {
        return character.name === selectedCharacter.name;
      })
    );
  }
}
