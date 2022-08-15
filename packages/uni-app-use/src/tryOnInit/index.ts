import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { Fn } from '@vueuse/shared';
import { onInit as onVue2Init } from 'uni-composition-api';
import { onInit as onVue3Init } from '@dcloudio/uni-app';

/**
 * Call onInit() if it's inside a component lifecycle, if not, just call the function
 *
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
export function tryOnInit(fn: Fn, sync = true) {
  if (isVue2) {
    if (getCurrentInstance()) {
      onVue2Init(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  } else if (isVue3) {
    if (getCurrentInstance()) {
      onVue3Init(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  }
}
