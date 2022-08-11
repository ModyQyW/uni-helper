import { defineComponent } from 'vue-demi';
import { useUniPlatform } from './index';

export const UseUniPlatform = defineComponent({
  name: 'UseUniPlatform',
  setup(props, { slots }) {
    const data = useUniPlatform();

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
