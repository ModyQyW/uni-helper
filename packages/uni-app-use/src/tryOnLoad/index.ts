import { isVue2, isVue3, nextTick, getCurrentInstance } from 'vue-demi';
import { onLoad as onVue2Load } from 'uni-composition-api';
import { onLoad as onVue3Load } from '@dcloudio/uni-app';

export interface OnLoadHook {
  (query?: Record<string, string | undefined>): void;
}

export function tryOnLoad(fn: OnLoadHook, sync = true) {
  if (isVue2) {
    if (getCurrentInstance()) {
      onVue2Load(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  } else if (isVue3) {
    if (getCurrentInstance()) {
      onVue3Load(fn);
    } else if (sync) {
      fn();
    } else {
      nextTick(fn);
    }
  }
}
