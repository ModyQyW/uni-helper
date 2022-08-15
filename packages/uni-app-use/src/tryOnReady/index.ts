import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { Fn } from '@vueuse/shared';
import { onReady as onVue2Ready } from 'uni-composition-api';
import { onReady as onVue3Ready } from '@dcloudio/uni-app';

/**
 * Call onReady() if it's inside a component lifecycle, if not, just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
export function tryOnReady(fn: Fn, sync = true) {
  if (isVue2) {
    if (getCurrentInstance()) {
      onVue2Ready(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  } else if (isVue3) {
    if (getCurrentInstance()) {
      onVue3Ready(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  }
}
