import '@total-typescript/ts-reset';

if (process.env.NODE_ENV === 'production') {
  // eslint-disable-next-line no-console
  console.log('🔐 Loading production mode...');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import('./index.prod');
} else {
  // eslint-disable-next-line no-console
  console.log('👷 Loading development mode...');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import('./index.dev');
}
