export async function exampleWithRandomThrow(): Promise<boolean> {
  if (Date.now() % 2 === 0) throw new Error('Throwing it!');

  return true;
}
