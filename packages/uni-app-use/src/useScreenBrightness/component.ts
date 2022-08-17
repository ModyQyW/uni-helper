import { defineComponent, reactive } from 'vue-demi';
import { useScreenBrightness } from './index';

export const UseScreenBrightness = defineComponent({
  name: 'UseScreenBrightness',
  setup(props, { slots }) {
    const data = reactive(useScreenBrightness());

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
