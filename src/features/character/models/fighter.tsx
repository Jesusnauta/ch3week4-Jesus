/* eslint-disable max-params */
/* eslint-disable no-unused-vars */
import { Character } from "../models/characters";

export class Fighter extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public weapon: string,
    public skill: number
  ) {
    super(name, family, age);
  }

  greetings() {
    super.greetings();
    return "Primero golpeo, luego pregunto";
  }
}
