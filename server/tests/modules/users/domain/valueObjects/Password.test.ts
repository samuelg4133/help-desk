import { Password } from '@modules/users/domain/valueObjects';
import { BcryptHashProvider } from '@shared/infra/providers/HashProvider/bcrypt/BcryptHashProvider';

describe('User password value object', () => {
  it('should accept a valid password value', () => {
    const password = Password.create({
      value: 'password',
    });

    expect(password.getValue()).toBeInstanceOf(Password);
  });

  it('should not accept a password that does not has at least six characters', () => {
    const passwordWithLessThanSixCharacters = Password.create({ value: 'pass' });

    expect(passwordWithLessThanSixCharacters.isFailure).toBeTruthy();
  });

  it('should compare two password values', async () => {
    let bcryptEncryptedPassword: string = '';

    new BcryptHashProvider().hash('password').then(value => (bcryptEncryptedPassword = value));

    const encryptedPassword = Password.create({
      value: bcryptEncryptedPassword,
      encrypted: true,
    });

    expect(encryptedPassword.getValue().compare(bcryptEncryptedPassword)).resolves.toBeTruthy();
    expect(encryptedPassword.getValue().getEncryptedValue()).resolves.toEqual(bcryptEncryptedPassword);
  });

  it('should return a encrypted password value', () => {
    let bcryptEncryptedPassword: string = '';

    const password = Password.create({
      value: 'password',
    });

    password
      .getValue()
      .getEncryptedValue()
      .then(value => (bcryptEncryptedPassword = value));

    const bcryptInstance = new BcryptHashProvider();

    expect(bcryptInstance.compare('password', bcryptEncryptedPassword)).resolves.toBeTruthy();
  });
});
