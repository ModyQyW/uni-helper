import { defineComponent, reactive } from 'vue';
import { useOnline } from './index';

export const UseOnline = defineComponent({
  name: 'UseOnline',
  setup(props, { slots }) {
    const data = reactive({
      isOnline: useOnline(),
    });

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
