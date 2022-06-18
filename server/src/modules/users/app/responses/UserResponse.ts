import { User } from '@modules/users/domain/models';

export interface IUserResponse {
  email: string;
  login: string;
  password: string;
}

export class UserResponse {
  public static async toResponse(user: User): Promise<IUserResponse> {
    return {
      email: user.email.value,
      login: user.login.value,
      password: await user.password.getEncryptedValue(),
    };
  }
}
