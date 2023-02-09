import { Character } from "../models/characters";
import { King } from "../models/king";
import { Fighter } from "../models/fighter";

export const characters: Character[] = [
  new King("Joffrey", "Baratheon", 34, 10),
  new Fighter("Jaime", "Lannister", 45, "sword", 5),
  new Fighter("Daenerys", "Targaryen", 25, "hammer", 7),
];
