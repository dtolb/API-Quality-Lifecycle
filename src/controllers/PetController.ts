import { Route, Get, Post, BodyProp, Path } from 'tsoa';
import { Pet, createPet, getPets, getPetById } from '../models/Pet';

@Route('pets')
export class PetController {
  @Get('/')
  public async getPets(): Promise<Pet[]> {
    return getPets();
  }

  @Get('{id}')
  public async getPet(@Path() id: number): Promise<Pet | null> {
    return getPetById(id) || null;
  }

  @Post('/')
  public async createPet(@BodyProp() name: string): Promise<Pet> {
    return createPet(name);
  }
}
