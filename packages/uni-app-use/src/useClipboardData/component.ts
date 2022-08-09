import { defineComponent, reactive } from 'vue-demi';
import { useClipboardData } from './index';

export const UseClipboardData = defineComponent({
  name: 'UseClipboardData',
  setup(props, { slots }) {
    const data = reactive(useClipboardData());

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
