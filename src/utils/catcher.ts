interface SafeReturn<T> {
  ok: boolean;
  data: T | string;
}

/**
 * Executes a function and returns an object with a ok flag and either the result of the function or an error message.
 * @param {() => T} fn - The function to execute.
 * @returns {SafeReturn<T>} An object with a ok flag and either the result of the function or an error message.
 * @template T
 */
export function safe<T>(fn: () => T): SafeReturn<T> {
  try {
    const _resp = fn();

    return {
      ok: true,
      data: _resp,
    };
  } catch (err) {
    return {
      ok: false,
      data: `${err}`,
    };
  }
}

/**
 * Executes an async function and returns a promise that resolves to a SafeReturn object.
 * The SafeReturn object contains a ok flag and either the data returned by the function
 * or an error message if the function throws an error.
 * @param {() => Promise<T>} fn - the async function to execute
 * @returns {Promise<SafeReturn<T>>} - a promise that resolves to a SafeReturn object
 * containing the ok flag and either the data returned by the function or an error message.
 */
export async function safeAsync<T>(fn: () => Promise<T>): Promise<SafeReturn<T>> {
  try {
    const _resp = await fn();

    return {
      ok: true,
      data: _resp,
    };
  } catch (err) {
    return {
      ok: false,
      data: `${err}`,
    };
  }
}
