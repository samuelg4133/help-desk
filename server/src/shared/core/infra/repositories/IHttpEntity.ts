import { IHttpResponse } from './IHttpResponse';

export interface IHttpEntity {
  ok<T>(body?: T): Promise<IHttpResponse> | IHttpResponse;
  created(): Promise<IHttpResponse> | IHttpResponse;
  noContent(): Promise<IHttpResponse> | IHttpResponse;
  badRequest(message?: string): Promise<IHttpResponse> | IHttpResponse;
  unauthorized(message?: string): Promise<IHttpResponse> | IHttpResponse;
  forbidden(message?: string): Promise<IHttpResponse> | IHttpResponse;
  notFound(message?: string): Promise<IHttpResponse> | IHttpResponse;
  tooManyRequests(message?: string): Promise<IHttpResponse> | IHttpResponse;
  internalServerError(message?: string): Promise<IHttpResponse> | IHttpResponse;
}
