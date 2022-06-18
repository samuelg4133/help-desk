import { Email } from '@modules/users/domain/valueObjects';

import { faker } from '@faker-js/faker';

describe('User email value object', () => {
  it('should accept a valid email value', () => {
    const email = Email.create({ value: 'johndoe@email.com' });

    expect(email.getValue()).toBeInstanceOf(Email);
  });

  it('should not accept invalid email value', () => {
    const emailError1 = Email.create({ value: 'johndoe' });
    const emailError2 = Email.create({ value: 'johndoe@example' });
    const emailError3 = Email.create({ value: '@example.com' });
    const emailError4 = Email.create({ value: 'johndoe@example.' });

    expect(emailError1.isFailure).toBeTruthy();
    expect(emailError2.isFailure).toBeTruthy();
    expect(emailError3.isFailure).toBeTruthy();
    expect(emailError4.isFailure).toBeTruthy();
  });

  it('should not accept email value greater than 255 characters', () => {
    const emailGreaterThan255CharactersIsValid = Email.isValid(faker.random.alpha({ count: 256 }));

    expect(emailGreaterThan255CharactersIsValid).toBeFalsy();
  });
});
