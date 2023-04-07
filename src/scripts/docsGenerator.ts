/* eslint-disable no-console */
import fs from 'fs';
import { OpenAPI } from 'express-zod-api';
import { routing } from '@/routes';
import { zodConfig as config, envConfig } from '@/configs';

console.log('✍️ Generating client...');
// Check this for docs: https://github.com/RobinTail/express-zod-api/tree/master#creating-a-documentation
fs.writeFileSync(
  './src/docs/api.yaml',
  new OpenAPI({
    routing, // the same routing and config that you use to start the server
    config,
    version: envConfig.API_VERSION,
    title: envConfig.API_TITLE,
    serverUrl: envConfig.API_SERVER_URL,
    composition: 'inline', // optional, or "components" for keeping schemas in a separate dedicated section using refs
  }).getSpecAsYaml(),
  'utf-8',
);
console.log('✅ OpenAPI API Docs generated at ./docs/api.yaml');
