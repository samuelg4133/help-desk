import { Router } from 'express';

import { UserControllerFactory } from '../factories/UserControllerFactory';

const userRoutes = Router();
const userControllerFactory = UserControllerFactory.getInstance();

userRoutes.post('/', userControllerFactory.create);

export { userRoutes };
