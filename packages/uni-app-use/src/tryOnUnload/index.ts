import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { Fn } from '@vueuse/shared';
import { onUnload as onVue2Unload } from 'uni-composition-api';
import { onUnload as onVue3Unload } from '@dcloudio/uni-app';

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
