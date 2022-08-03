import { defineComponent, reactive } from 'vue-demi';
import { usePreferredLanguage } from './index';

export const UsePreferredLanguage = defineComponent({
  name: 'UsePreferredLanguage',
  setup(props, { slots }) {
    const data = reactive({
      language: usePreferredLanguage(),
    });

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
