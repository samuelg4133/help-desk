import { Entity } from 'shared/core/domain/Entity';
import { UniqueEntityID } from 'shared/core/domain/UniqueEntityID';

import { Email, Login, Password } from '../valueObjects';

interface IUser {
  email: Email;
  login: Login;
  password: Password;
}

interface ICreateUser {
  email: string;
  login: string;
  password: string;
}

export class User extends Entity<IUser> {
  private constructor(props: IUser, id?: UniqueEntityID) {
    super(props, id);
  }

  public get email(): Email {
    return this.props.email;
  }

  public get password(): Password {
    return this.props.password;
  }

  public get login(): Login {
    return this.props.login;
  }

  public static create(props: ICreateUser, encryptedPassword?: boolean, id?: UniqueEntityID): User {
    const email = Email.create({ value: props.email }).get();
    const login = Login.create({ value: props.login }).get();
    const password = Password.create({ value: props.password, encrypted: encryptedPassword }).get();
    const user = new User(
      {
        email,
        login,
        password,
      },
      id,
    );

    return user;
  }
}
