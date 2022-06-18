import { HttpStatus } from './HttpStatus';
import { IHttpEntity } from './repositories';
import { IHttpRequest } from './repositories/IHttpRequest';
import { IHttpResponse } from './repositories/IHttpResponse';

export class HttpEntity implements IHttpEntity {
  private readonly _: IHttpRequest;

  private readonly response: IHttpResponse;

  public constructor(request: IHttpRequest, response: IHttpResponse) {
    this._ = request;
    this.response = response;
  }

  public ok<T>(body?: T): Promise<IHttpResponse> | IHttpResponse {
    if (!body) {
      return this.response.sendStatus(HttpStatus.OK);
    }
    return this.response.status(HttpStatus.OK).json(body);
  }

  public created(): Promise<IHttpResponse> | IHttpResponse {
    return this.response.sendStatus(HttpStatus.CREATED);
  }

  public noContent(): Promise<IHttpResponse> | IHttpResponse {
    return this.response.sendStatus(HttpStatus.NO_CONTENT);
  }

  public badRequest(message?: string): Promise<IHttpResponse> | IHttpResponse {
    return this.response.status(HttpStatus.BAD_REQUEST).json({
      error: message || 'Bad request',
    });
  }

  public unauthorized(message?: string): Promise<IHttpResponse> | IHttpResponse {
    return this.response.status(HttpStatus.UNAUTHORIZED).json({
      error: message || 'Unauthorized',
    });
  }

  public forbidden(message?: string): Promise<IHttpResponse> | IHttpResponse {
    return this.response.status(HttpStatus.FORBIDDEN).json({
      error: message || 'Forbidden',
    });
  }

  public notFound(message?: string): Promise<IHttpResponse> | IHttpResponse {
    return this.response.status(HttpStatus.NOT_FOUND).json({
      error: message || 'Not found',
    });
  }

  public tooManyRequests(message?: string): Promise<IHttpResponse> | IHttpResponse {
    return this.response.status(HttpStatus.TOO_MANY_REQUESTS).json({
      error: message || 'Too many requests',
    });
  }

  public internalServerError(message?: string): Promise<IHttpResponse> | IHttpResponse {
    return this.response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: message || 'Internal server error',
    });
  }
}
