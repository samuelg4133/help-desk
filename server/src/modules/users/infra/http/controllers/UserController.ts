import { HttpController } from '@shared/core/infra/HttpController';
import { IHttpRequest } from '@shared/core/infra/repositories/IHttpRequest';
import { IHttpResponse } from '@shared/core/infra/repositories/IHttpResponse';

export class UserController extends HttpController {
  public constructor(request: IHttpRequest, response: IHttpResponse) {
    super(request, response);
  }

  public create() {
    return this.httpResponse.ok();
  }
}
