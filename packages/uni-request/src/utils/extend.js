import { forEach } from './forEach';

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
export function extend(a, b, thisArg, { allOwnKeys } = {}) {
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
