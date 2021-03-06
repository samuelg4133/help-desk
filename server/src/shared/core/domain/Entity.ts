import { UniqueEntityID } from './UniqueEntityID';

export abstract class Entity<T> {
  protected readonly id: UniqueEntityID;

  public readonly props: T;

  constructor(props: T, id?: UniqueEntityID) {
    this.id = id || new UniqueEntityID();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this.id.equals(object.id);
  }
}
