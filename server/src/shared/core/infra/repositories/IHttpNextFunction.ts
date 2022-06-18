export interface IHttpNextFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (err?: any): void;
  (deferToNext: 'router'): void;
  (deferToNext: 'route'): void;
}
