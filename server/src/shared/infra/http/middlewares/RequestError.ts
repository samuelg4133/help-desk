import { HttpEntity } from '@shared/core/infra/HttpEntity';
import { IHttpEntity, IHttpNextFunction, IHttpRequest, IHttpResponse } from '@shared/core/infra/repositories';

export class RequestError {
  private readonly httpResponse: IHttpEntity;

  private constructor(request: IHttpRequest, response: IHttpResponse) {
    this.httpResponse = new HttpEntity(request, response);
  }

  public static getInstance(request: IHttpRequest, response: IHttpResponse): RequestError {
    return new RequestError(request, response);
  }

  public static error(err: Error, request: IHttpRequest, response: IHttpResponse, _: IHttpNextFunction): IHttpResponse | Promise<IHttpResponse> {
    return RequestError.getInstance(request, response).error(err);
  }

  private error(err: Error): IHttpResponse | Promise<IHttpResponse> {
    if (err instanceof SyntaxError) {
      return this.httpResponse.badRequest('Error in the syntax of the request.');
    }
    if (err instanceof Error) {
      return this.httpResponse.badRequest(err.message);
    }

    console.error(err);

    return this.httpResponse.internalServerError();
  }
}
