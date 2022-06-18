import bcrypt from 'bcrypt';

import { IHashProvider } from '../IHashProvider';

export class BcryptHashProvider implements IHashProvider {
  public async compare(data: string, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }

  public async hash(data: string): Promise<string> {
    return bcrypt.hash(data, 8);
  }
}
