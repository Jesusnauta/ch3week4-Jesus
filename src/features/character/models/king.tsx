/* eslint-disable no-unused-vars */
import { Character } from "./characters";

export class King extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public kingdomAges: number
  ) {
    super(name, family, age);
  }

  greetings() {
    super.greetings();
    return "Tienes que morir";
  }
}
