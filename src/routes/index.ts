import { getUserEndpoint, updateUserEndpoint } from '@/controllers/users.endpoints';
import { DependsOnMethod, Routing } from 'express-zod-api';

export const routing: Routing = {
  v1: {
    user: {
      ':id': new DependsOnMethod({
        get: getUserEndpoint,
        post: updateUserEndpoint,
      }),
    },
  },
};
