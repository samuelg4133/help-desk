export interface IHttpResponse {
  json<T>(body: T): this;
  status(code: number): this;
  sendStatus(code: number): this;
}
