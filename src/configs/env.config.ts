import { EnvFile } from '@/models';
import { parseEnv } from 'znv';

export const envConfig = parseEnv(process.env, EnvFile);
