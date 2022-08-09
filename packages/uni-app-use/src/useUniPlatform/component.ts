import { defineComponent } from 'vue-demi';
import { useUniPlatform } from './index';

export const UseUniPlatform = defineComponent({
  name: 'UseNetwork',
  setup(props, { slots }) {
    const data = useUniPlatform();

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
