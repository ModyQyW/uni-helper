import { defineComponent, reactive } from 'vue-demi';
import { useSystemInfo } from './index';

export const UseSystemInfo = defineComponent({
  name: 'UseSystemInfo',
  setup(props, { slots }) {
    const data = reactive(useSystemInfo());

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
