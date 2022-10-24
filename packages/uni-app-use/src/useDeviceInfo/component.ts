import { defineComponent, reactive } from 'vue';
import { useDeviceInfo } from './index';

export const UseDeviceInfo = defineComponent({
  name: 'UseDeviceInfo',
  setup(props, { slots }) {
    const data = reactive(useDeviceInfo());

    return () => {
      if (slots.default) {
        return slots.default(data);
      }
    };
  },
});
