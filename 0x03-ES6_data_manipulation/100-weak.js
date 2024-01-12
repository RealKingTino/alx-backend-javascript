export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error(`Endpoint load is high: ${endpoint.protocol}/${endpoint.name}`);
  }
}
