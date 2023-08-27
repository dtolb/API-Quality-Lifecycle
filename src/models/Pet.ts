/**
 * @tsoaModel
 * @example
 * {
 *   items: [
 *     {
 *       "id": 1,
 *       "name": "Fargo",
 *       "species": "dog"
 *     },
 *     {
 *       "id": 2,
 *       "name": "June",
 *       "species": "dog"
 *     }
 *   ]
 * }
 */
export interface PetsList {
  /**
   * The list of pets
   */
  items: Pet[];
}

/**
 * @tsoaModel
 * @example
 * {
 *   "id": 2,
 *   "name": "Fargo",
 *   "species": "dog"
 * }
 */
export interface Pet extends CreatePetRequest {
  /**
   * The id of the pet, used for update and fetching
   */
  id: number;
}

/**
 * @tsoaModel
 * @example
 * {
 *   "max": 2
 *   "sort": 'asc',
 *   "offset": '29523'
 * }
 */
export interface PaginationRequest {
  /**
   * Maximum number of items to return
   */
  max?: number;
  /**
   * Sorting order
   */
  order?: 'asc' | 'desc';
  /**
   * offset id to get next page
   */
  offset?: string;
}

/**
 * @tsoaModel
 * @example
 * {
 *  "name": "Fargo",
 *  "species": "dog"
 * }
 */
export interface CreatePetRequest extends UpdatePetRequest {
  /**
   * The species of the pet
   */
  species: string;
}

/**
 * @tsoaModel
 * @example
 * {
 *   "name": "Dolph"
 * }
 */
export interface UpdatePetRequest {
  /**
   * The name of the pet, can be updated later
   */
  name: string;
}

//in memory db for now
export let pets: Pet[] = [];
let nextId = 1;

export function createPet(createPetRequest: CreatePetRequest): Pet {
  const newPet = {
    id: nextId++,
    name: createPetRequest.name,
    species: createPetRequest.species,
  };

  pets.push(newPet);
  return newPet;
}

export function updatePet(id: number, updatePetRequest: UpdatePetRequest): Pet | null {
  const index = pets.findIndex((p: Pet) => p.id === id);
  if (index === -1) {
    return null;
  }

  const existingPet = pets[index];
  existingPet.name = updatePetRequest.name ? updatePetRequest.name : existingPet.name;
  return existingPet;
}

export function getPetById(id: number): Pet | undefined {
  return pets.find((pet) => pet.id === id);
}

export function getPets(pagination: PaginationRequest): PetsList {
  if (pagination) {
  }
  return {
    items: pets,
  };
}
