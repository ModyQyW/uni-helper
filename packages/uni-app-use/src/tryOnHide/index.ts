import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { Fn } from '@vueuse/shared';
import { onHide as onVue2Hide } from 'uni-composition-api';
import { onHide as onVue3Hide } from '@dcloudio/uni-app';

export function tryOnHide(fn: Fn, sync = true) {
  if (isVue2) {
    if (getCurrentInstance()) {
      onVue2Hide(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  } else if (isVue3) {
    if (getCurrentInstance()) {
      onVue3Hide(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  }
}
