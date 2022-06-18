import { ValueObject } from '@shared/core/domain/ValueObject';
import { Result } from '@shared/core/logic/Result';
import { BcryptHashProvider } from '@shared/infra/providers/HashProvider/bcrypt/BcryptHashProvider';
import { IHashProvider } from '@shared/infra/providers/HashProvider/IHashProvider';

interface IPassword {
  value: string;
  encrypted?: boolean;
}

export class Password extends ValueObject<IPassword> {
  private readonly hashProvider: IHashProvider;

  private constructor(props: IPassword) {
    super(props);
    this.hashProvider = new BcryptHashProvider();
  }

  public async compare(password: string): Promise<boolean> {
    let encrypted: string;

    if (this.props.encrypted) {
      encrypted = this.props.value;

      return this.hashProvider.compare(password, encrypted);
    }

    return this.props.value === password;
  }

  public static create(props: IPassword): Result<Password> {
    if (!props.encrypted && !this.isValid(props.value)) {
      return Result.fail('The password must have between 6 and 255 characters.');
    }
    return Result.ok(new Password(props));
  }

  public async getEncryptedValue(): Promise<string> {
    if (this.props.encrypted) {
      return this.props.value;
    }
    return this.hashProvider.hash(this.props.value);
  }

  public static isValid(password: string): boolean {
    if (!password || password.trim().length < 6 || password.trim().length > 255) {
      return false;
    }

    return true;
  }
}
