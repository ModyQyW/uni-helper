import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { Fn } from '@vueuse/shared';
import { onUnload as onVue2Unload } from 'uni-composition-api';
import { onUnload as onVue3Unload } from '@dcloudio/uni-app';

/**
 * Call onUnload() if it's inside a component lifecycle, if not, just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
export function tryOnUnload(fn: Fn, sync = true) {
  if (isVue2) {
    if (getCurrentInstance()) {
      onVue2Unload(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  } else if (isVue3) {
    if (getCurrentInstance()) {
      onVue3Unload(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  }
}
