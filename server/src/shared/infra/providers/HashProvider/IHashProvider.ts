export interface IHashProvider {
  compare(data: string, encrypted: string): Promise<boolean> | boolean;
  hash(data: string): Promise<string> | string;
}
