import { ValueObject } from '@shared/core/domain/ValueObject';
import { Result } from '@shared/core/logic/Result';

interface IEmail {
  value: string;
}

export class Email extends ValueObject<IEmail> {
  private constructor(props: IEmail) {
    super(props);
  }

  public get value(): string {
    return this.props.value;
  }

  public static create(props: IEmail): Result<Email> {
    if (!this.isValid(props.value)) {
      return Result.fail(`The email "${props.value}" is invalid.`);
    }

    const formattedEmail = this.format(props.value);

    return Result.ok(
      new Email({
        value: formattedEmail,
      }),
    );
  }

  public static format(email: string) {
    return email.trim().toLowerCase();
  }

  public static isValid(email: string): boolean {
    if (!email || email.trim().length > 255) {
      return false;
    }

    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(email)) {
      return false;
    }

    return true;
  }
}
