import { IRepository } from '@shared/core/domain/Repository';

import { User } from '../models';

export type IUserRepository = IRepository<User, string>;
