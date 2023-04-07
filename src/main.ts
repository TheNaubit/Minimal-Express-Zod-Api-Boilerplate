import { createServer } from 'express-zod-api';
import { zodConfig, envConfig, isDevEnviroment } from '@/configs';
import { routing } from '@/routes';

if (isDevEnviroment && envConfig.GENERATE_CLIENT) {
  import('@/scripts/clientGenerator');
}

if (isDevEnviroment && envConfig.GENERATE_API_DOCS) {
  import('@/scripts/docsGenerator');
}

// For docs about the express-zod-api integration: https://github.com/RobinTail/express-zod-api/tree/master
createServer(zodConfig, routing);
