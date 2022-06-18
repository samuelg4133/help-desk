import { ValueObject } from '@shared/core/domain/ValueObject';
import { Result } from '@shared/core/logic/Result';

interface ILogin {
  value: string;
}

export class Login extends ValueObject<ILogin> {
  private constructor(props: ILogin) {
    super(props);
  }

  public get value(): string {
    return this.props.value;
  }

  public static create(props: ILogin): Result<Login> {
    if (!this.isValid(props.value)) {
      return Result.fail(`The login "${props.value}" is invalid.`);
    }

    const formattedLogin = this.format(props.value);

    return Result.ok(
      new Login({
        value: formattedLogin,
      }),
    );
  }

  public static format(login: string): string {
    return login.trim().toLowerCase();
  }

  public static isValid(login: string): boolean {
    if (!login || login.trim().length < 2 || login.trim().length > 255) {
      return false;
    }

    return true;
  }
}
