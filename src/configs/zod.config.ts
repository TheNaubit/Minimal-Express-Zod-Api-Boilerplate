import { createConfig } from 'express-zod-api';
import { envConfig } from './env.config';

// Possible settings: https://github.com/RobinTail/express-zod-api/blob/master/src/config-type.ts
export const zodConfig = createConfig({
  server: {
    listen: envConfig.PORT,
    compression: envConfig.COMPRESSION_ENABLED,
    upload: envConfig.UPLOAD_ENABLED,
  },
  startupLogo: false,
  cors: envConfig.CORS_ENABLED,
  logger: {
    level: envConfig.LOG_LEVEL,
    color: envConfig.LOG_COLORED,
  },
});
