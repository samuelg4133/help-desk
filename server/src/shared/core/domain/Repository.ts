import { Sort } from './Sort';

export interface IRepository<T, ID> {
  count(): Promise<number> | number;
  delete(entity: T): Promise<void> | void;
  deleteById(id: ID): Promise<void> | void;
  existsById(id: ID): Promise<boolean> | boolean;
  findAll(sort?: Sort): Promise<Array<T>> | Array<T>;
  findById(id: ID): Promise<T> | T;
  save<S extends T>(entity: S): Promise<S> | S;
}
