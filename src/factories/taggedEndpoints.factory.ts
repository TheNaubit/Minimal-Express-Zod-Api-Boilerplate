import { zodConfig as config } from '@/configs';
import { EndpointsFactory, defaultResultHandler } from 'express-zod-api';

export const taggedEndpointsFactory = new EndpointsFactory({
  resultHandler: defaultResultHandler,
  config,
});
