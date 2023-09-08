import { Route, Get, Post, Path, Body, OperationId, Tags,  SuccessResponse, Security } from 'tsoa';

import { Controller } from '@tsoa/runtime';
import { HumansList, getHumans, getHumanById, Human, CreateHumanRequest, createHuman } from '../models/Human';


interface LocationHeader {
  location: string;
}

@Route('humans')
// @Response<ErrorBody & { message: 'User is not authorized' }>(401, 'Unauthorized')
// @Response<ErrorBody & { message: 'User is forbidden to access the resource' }>(403, 'Forbidden')
@Security('api_key')
export class HumanController extends Controller {

  @Get()
  @OperationId('listHumans')
  @Tags('Read')
  @SuccessResponse('200', 'OK')
  public async getHumans(): Promise<HumansList> {
    return getHumans();
  }

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


  @Post()
  @Tags('Write')
  @SuccessResponse<LocationHeader>('201', 'Created')
  @OperationId('createHuman')
  public async createHuman(@Body() createHumanRequest: CreateHumanRequest): Promise<Human> {
    this.setStatus(201);
    return createHuman(createHumanRequest);
  }
}
