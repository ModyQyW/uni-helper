import { defineComponent } from 'vue-demi';
import { useGlobalData } from './index';

export const UseGlobalData = defineComponent({
  name: 'UseGlobalData',
  setup(props, { slots }) {
    const data = useGlobalData();

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
