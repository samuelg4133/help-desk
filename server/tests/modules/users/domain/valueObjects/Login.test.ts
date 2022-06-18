import { Login } from '@modules/users/domain/valueObjects';

describe('User login value object', () => {
  it('should accept a valid login value', () => {
    const login = Login.create({
      value: 'johndoe',
    });

    expect(login.getValue()).toBeInstanceOf(Login);
  });

  it('should not accept a login that does not has at least two characters', () => {
    const loginWithLessThanTwoCharacters = Login.create({
      value: 'a',
    });

    expect(loginWithLessThanTwoCharacters.isFailure).toBeTruthy();
  });
});
