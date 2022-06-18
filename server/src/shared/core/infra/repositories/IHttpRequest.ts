interface IParams {
  [key: string]: string;
}
interface IQuery {
  [key: string]: undefined | string | string[] | IQuery | IQuery[];
}

export interface IHttpRequest<T = unknown> {
  body: T;
  ip: string;
  params: IParams;
  query: IQuery;
  userId: string;
}
