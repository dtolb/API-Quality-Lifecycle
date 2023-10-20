/**
 * @tsoaModel
 * @example
 * {
 *   items: [
 *     {
 *       "id": 1,
 *       "name": "Dan"
 *     },
 *     {
 *       "id": 2,
 *       "name": "Liz"
 *     }
 *   ]
 * }
 */
export interface HumansList {
  /**
   * The list of humans
   */
  items: Human[];
}

/**
 * @tsoaModel
 * @example
 * {
 *   "id": 2,
 *   "name": "Dan"
 * }
 */
export interface Human extends CreateHumanRequest {
  /**
   * The id of the human, used for update and fetching
   */
  id: number;
}

/**
 * @tsoaModel
 * @example
 * {
 *  "name": "Dan"
 * }
 */
export interface CreateHumanRequest extends UpdateHumanRequest {
  /**
   * The name of the human
   */
  name: string;
}

/**
 * @tsoaModel
 * @example
 * {
 * "phoneNumber": "555-555-5555",
 * "address": "123 Main St"
 * }
 */
export interface UpdateHumanRequest {
  /**
   * The address of the human
   */
  address: string;
  /**
   * The phone number of the human
   */
  phoneNumber: string;
}

/**
 * Error response returned on failure
 */
export interface ErrorBody {
  /**
   * The message informing users of their error
   */
  message: string;
}

//in memory db for now
export let humans: Human[] = [];
let nextId = 1;

export function createHuman(createHumanRequest: CreateHumanRequest): Human {
  const newHuman = {
    id: nextId++,
    name: createHumanRequest.name,
    address: createHumanRequest.address,
    phoneNumber: createHumanRequest.phoneNumber,
  };

  humans.push(newHuman);
  return newHuman;
}

export function getHumanById(id: number): Human | undefined {
  return humans.find((human) => human.id === id);
}

export function getHumans(): HumansList {
  return {
    items: humans,
  };
}

export function updateHumanById(id: number, updateHumanRequest: UpdateHumanRequest): Human | null {
  const index = humans.findIndex((p: Human) => p.id === id);
  if (index >= 0 && index < humans.length) {
    humans[index] = {
      ...humans[index],
      ...updateHumanRequest,
    };
    return humans[index];
  } else {
    console.error(`Invalid index: ${index}. Cannot update pet.`);
    return null;
  }
}

export function deleteHumanById(id: number): Human | null {
  const index = humans.findIndex((p: Human) => p.id === id);
  if (index >= 0 && index < humans.length) {
    const pet = humans[index];
    humans.splice(index, 1);
    return pet;
  } else {
    console.error(`Invalid index: ${index}. Cannot remove pet.`);
    return null;
  }
}
