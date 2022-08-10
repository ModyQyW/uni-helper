import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { Fn } from '@vueuse/shared';
import { onShow as onVue2Show } from 'uni-composition-api';
import { onShow as onVue3Show } from '@dcloudio/uni-app';

export function tryOnShow(fn: Fn, sync = true) {
  if (isVue2) {
    if (getCurrentInstance()) {
      onVue2Show(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  } else if (isVue3) {
    if (getCurrentInstance()) {
      onVue3Show(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  }
}
