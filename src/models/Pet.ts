export interface Pet {
  id: number;
  name: string;
}

let pets: Pet[] = [];
let nextId = 1;

export function createPet(name: string): Pet {
  const newPet = {
    id: nextId++,
    name,
  };

  pets.push(newPet);
  return newPet;
}

export function getPetById(id: number): Pet | undefined {
  return pets.find((pet) => pet.id === id);
}

export function getPets(): Pet[] {
  return pets;
}
