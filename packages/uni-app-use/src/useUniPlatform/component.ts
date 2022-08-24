import { defineComponent, reactive } from 'vue';
import { useUniPlatform } from './index';

export const UseUniPlatform = defineComponent({
  name: 'UseUniPlatform',
  setup(props, { slots }) {
    const data = reactive({
      uniPlatform: useUniPlatform(),
    });

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
