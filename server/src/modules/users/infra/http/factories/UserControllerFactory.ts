import { IHttpRequest } from '@shared/core/infra/repositories/IHttpRequest';
import { IHttpResponse } from '@shared/core/infra/repositories/IHttpResponse';

import { UserController } from '../controllers/UserController';

export class UserControllerFactory {
  private constructor() {}

  public static getInstance() {
    return new UserControllerFactory();
  }

  public create(req: IHttpRequest, res: IHttpResponse) {
    return new UserController(req, res).create();
  }
}
