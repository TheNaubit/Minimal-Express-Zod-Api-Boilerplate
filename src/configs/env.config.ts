import { EnvFileSchema } from '@/models';
import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig = EnvFileSchema.parse(process.env);
