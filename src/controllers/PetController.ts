import { Route, Put, Get, Post, Delete, Path, Body, OperationId, Tags, SuccessResponse, Response, Security, Query } from 'tsoa';
import {
  Pet,
  createPet,
  getPets,
  getPetById,
  CreatePetRequest,
  updatePet,
  UpdatePetRequest,
  PaginationRequest,
  PetsList,
  CommonResponseHeader,
  ErrorBody,
  ListPetsHeaders,
  deletePetById,
} from '../models/Pet';
import { Controller } from '@tsoa/runtime';

@Route('pets')
@Response<ErrorBody & { message: 'User is not authorized' }, CommonResponseHeader>(401, 'Unauthorized')
@Response<ErrorBody & { message: 'User is forbidden to access the resource' }, CommonResponseHeader>(403, 'Forbidden')
@Security('api_key')
export class PetController extends Controller {
  /**
   * Lists all pets in the PetStore
   * @param max Maximum number of items to return
   * @param order Sorting order
   * @param offset offset id to get next page
   */
  @Get()
  @OperationId('listPets')
  @Tags('Read')
  @SuccessResponse<ListPetsHeaders>('200', 'OK')
  public async getPets(@Query() max?: number, @Query() order?: 'asc' | 'desc', @Query() offset?: string): Promise<PetsList> {
    const pagination: PaginationRequest = {
      max,
      order,
      offset,
    };
    return getPets(pagination);
  }

  /**
   * Get a pet by its id
   * @param id id of the pet to fetch
   */
  @Get('{id}')
  @Tags('Read')
  @OperationId('getPet')
  @SuccessResponse<ListPetsHeaders>('200', 'OK')
  public async getPet(@Path() id: number): Promise<Pet | null> {
    const pet = getPetById(id) || null;
    if (pet === null) {
      this.setStatus(404);
      return null;
    }
    return pet;
  }

  /**
   * Create a new pet with its adorable name
   * @param createPetRequest the information to create the pet
   */
  @Post()
  @Tags('Write')
  @SuccessResponse<CommonResponseHeader>('201', 'Created')
  @OperationId('createPet')
  public async createPet(@Body() createPetRequest: CreatePetRequest): Promise<Pet> {
    this.setStatus(201);
    return createPet(createPetRequest);
  }

  /**
   * Update the pet information by its id
   * @param id id of the pet to update
   * @param updatePetRequest the information to update the Pet
   */
  @Put('{id}')
  @Tags('Write')
  @OperationId('updatePet')
  @SuccessResponse<CommonResponseHeader>('200', 'OK')
  public async updatePet(@Path() id: number, @Body() updatePetRequest: UpdatePetRequest): Promise<Pet | null> {
    const updatedPet = updatePet(id, updatePetRequest);
    if (updatedPet === null) {
      this.setStatus(404);
      return null;
    }
    return updatedPet;
  }

  @Delete('{id}')
  public async deletePet(@Path() id: number): Promise<Pet | null> {
    const deletedPet = deletePetById(id);
    if (deletedPet === null) {
      this.setStatus(404);
      return null;
    }
    return deletedPet;
  }
}
