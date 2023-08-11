import { Route, Get, Post, BodyProp, Path } from 'tsoa';
import { Pet, createPet, getPets, getPetById } from '../models/Pet';

@Route('pets')
export class PetController {
  @Get()
  @Tags('Pets')
  @Description('Retrieve a list of all pets.')
  @OperationId('listPets')
  public async getPets(): Promise<Pet[]> {
    return getPets();
  }

  @Get('{id}')
  @Tags('Pets')
  @Description('Retrieve a specific pet by its id.')
  @OperationId('getPet')
  public async getPet(@Path() id: number): Promise<Pet | null> {
    return getPetById(id) || null;
  }

  @Post()
  @Tags('Pets')
  @Description('Create a new pet.')
  @OperationId('createPet')
  public async createPet(@BodyProp() name: string): Promise<Pet> {
    return createPet(name);
  }
}
