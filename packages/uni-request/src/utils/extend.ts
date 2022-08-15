import { isFunction } from 'lodash-es';
import { forEach } from './forEach';

/**
 * Extends object a by mutably adding to it the properties of object b.
 */
export const extend = (
  a: Record<string, any>,
  b: Record<string, any>,
  thisArg?: Record<string, any>,
  { allOwnKeys = false } = {},
) => {
  forEach(
    b,
    (val, key) => {
      if (thisArg && isFunction(val)) {
        a[key] = val.bind(thisArg);
      } else {
        a[key] = val;
      }
    },
    { allOwnKeys },
  );
  return a;
};
