import { Character } from '../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ): void {
    const newCharacter: Character = { id: uuid(), ...character };

    //unshift si se quiere ubicar al inicio
    this.characters.push(newCharacter);
  }

  deleteCharacterById( id: string ): void {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }
}
