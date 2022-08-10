import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { Fn } from '@vueuse/shared';
import { onInit as onVue2Init } from 'uni-composition-api';
import { onInit as onVue3Init } from '@dcloudio/uni-app';

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
