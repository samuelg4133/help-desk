import { IService } from '@shared/core/domain/Service';

import { ICreateUserDTO } from '../dtos/UserDTO';
import { IUserResponse } from '../responses/UserResponse';

export class CreateUser implements IService<ICreateUserDTO, IUserResponse> {
  execute(request?: ICreateUserDTO): Promise<IUserResponse> {
    throw new Error('Method not implemented.');
  }
}
