import {Route, Get, Post, Path, Body, OperationId, Tags, SuccessResponse, Response, Security, Delete} from 'tsoa';

import { Controller } from '@tsoa/runtime';
import { HumansList, getHumans, deleteHumanById, getHumanById, Human, CreateHumanRequest, ErrorBody, createHuman } from '../models/Human';
import {CommonResponseHeader} from "../models/Pet";

/**
 * @tsoaModel
 * @example
 * {
 *     "location": "https://petstore.com/v1/humans/1"
 * }
 */
interface LocationHeader {
  /**
   * The URI of the Human
   */
  location: string;
}

@Route('humans')
@Response<ErrorBody & { message: 'User is not authorized' }>(401, 'Unauthorized')
@Response<ErrorBody & { message: 'User is forbidden to access the resource' }>(403, 'Forbidden')
@Security('api_key')
export class HumanController extends Controller {
  /**
   * Lists all humans in the PetStore
   */
  @Get()
  @OperationId('listHumans')
  @Tags('Read')
  @SuccessResponse('200', 'OK')
  public async getHumans(): Promise<HumansList> {
    return getHumans();
  }

  /**
   * Get a human by its id
   * @param id id of the human to fetch
   */
  @Get('{id}')
  @Tags('Read')
  @OperationId('getHuman')
  @SuccessResponse('200', 'OK')
  public async getHuman(@Path() id: number): Promise<Human | null> {
    const human = getHumanById(id) || null;
    if (human === null) {
      this.setStatus(404);
      return null;
    }
    return human;
  }

  /**
   * Create a new pet with its adorable name
   * @param createHumanRequest the information to create the pet
   */
  @Post()
  @Tags('Write')
  @SuccessResponse<LocationHeader>('201', 'Created')
  @OperationId('createHuman')
  public async createHuman(@Body() createHumanRequest: CreateHumanRequest): Promise<Human> {
    this.setStatus(201);
    return createHuman(createHumanRequest);
  }

  /**
   * Remove a human when after they adopt
   * @param id id of the pet to update
   */
  @Delete('{id}')
  @SuccessResponse<CommonResponseHeader>('204', 'No Content')
  public async deletePet(@Path() id: number): Promise<Human | null> {
    const deletedHuman = deleteHumanById(id);
    if (deletedHuman === null) {
      this.setStatus(404);
      return null;
    }
    return deletedHuman;
  }
  
}
