import { forEach } from './forEach';

/**
 * Extends object a by mutably adding to it the properties of object b.
 */
export function extend(
  a: Record<string, any>,
  b: Record<string, any>,
  thisArg?: Record<string, any>,
  { allOwnKeys = false } = {},
) {
  forEach(
    b,
    function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = val.bind(thisArg);
      } else {
        a[key] = val;
      }
    },
    { allOwnKeys },
  );
  return a;
}
