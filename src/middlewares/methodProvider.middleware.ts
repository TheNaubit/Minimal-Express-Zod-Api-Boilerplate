import { Method, createMiddleware } from 'express-zod-api';
import { z } from 'zod';

export const methodProviderMiddleware = createMiddleware({
  input: z.object({}),
  middleware: async ({ request }) => ({
    method: request.method.toLowerCase() as Method,
  }),
});
