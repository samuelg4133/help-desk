export default interface IMapper<T, U> {
  toDomain(raw: U): T;
  toPersistence(t: T): U;
}
