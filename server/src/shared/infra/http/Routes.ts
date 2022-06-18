import { Router } from 'express';

import { userRoutes } from '@modules/users/infra/http/routes/UserRoutes';

const routes = Router();

routes.use('/users', userRoutes);

export { routes };
