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
   * The list of pets
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
export interface CreateHumanRequest {
  name: string;
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
