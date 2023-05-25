import { z } from 'zod';

export const LogLevelSchema = z.enum(['silent', 'warn', 'debug']).default('debug');

export const EnvFileSchema = z.object({
  PORT: z.coerce.number().default(8090),
  CORS_ENABLED: z.coerce.boolean().default(true),
  LOG_LEVEL: LogLevelSchema,
  LOG_COLORED: z.coerce.boolean().default(true),
  COMPRESSION_ENABLED: z.coerce.boolean().default(true),
  UPLOAD_ENABLED: z.coerce.boolean().default(true),
  GENERATE_CLIENT: z.coerce.boolean().default(true),
  GENERATE_API_DOCS: z.coerce.boolean().default(true),
  API_VERSION: z.coerce.string().default('0.0.1'),
  API_TITLE: z.coerce.string().default('minimal-express-zod-api-boilerplate'),
  API_SERVER_URL: z.coerce.string().default('http://api.example.com/v1'),
});

export const Environment = z.enum(['production', 'development']);
