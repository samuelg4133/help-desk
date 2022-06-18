import { User } from '@modules/users/domain/models/User';

const validEmail = 'user@example.com';
const validLogin = 'user';
const validPassword = 'password';

describe('User model', () => {
  it('should create a new user', () => {
    const user = User.create({
      email: validEmail,
      login: validLogin,
      password: validPassword,
    });

    expect(user.email.value).toEqual(validEmail);
    expect(user.login.value).toEqual(validLogin);
    expect(user.password.compare(validPassword)).resolves.toBeTruthy();
  });
});
