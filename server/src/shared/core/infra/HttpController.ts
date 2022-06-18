import { HttpEntity } from './HttpEntity';
import { IHttpEntity } from './repositories/IHttpEntity';
import { IHttpRequest } from './repositories/IHttpRequest';
import { IHttpResponse } from './repositories/IHttpResponse';

export abstract class HttpController {
  private readonly response: IHttpEntity;

  public constructor(request: IHttpRequest, response: IHttpResponse) {
    this.response = new HttpEntity(request, response);
  }

  public get httpResponse(): IHttpEntity {
    return this.response;
  }

  public create(): Promise<IHttpResponse> | IHttpResponse {
    return this.response.created();
  }

  public delete(): Promise<IHttpResponse> | IHttpResponse {
    return this.response.noContent();
  }

  public index(): Promise<IHttpResponse> | IHttpResponse {
    return this.response.ok();
  }

  public show(): Promise<IHttpResponse> | IHttpResponse {
    return this.response.ok();
  }

  public update(): Promise<IHttpResponse> | IHttpResponse {
    return this.response.noContent();
  }
}
