/* eslint-disable no-unused-vars */
export abstract class Character {
  public isLive: boolean;
  constructor(public name: string, public family: string, public age: number) {
    this.isLive = true;
  }

  greetings() {
    return ` ${this.name}`;
  }

  die() {
    this.isLive = false;
  }
}
