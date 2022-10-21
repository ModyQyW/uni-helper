// FIXME: stuck
import { defineConfig } from '../config';

export default defineConfig({
  from: 'uni-app-deploy.config.ts',
  hello: {
    unconfig: 'uni-app-deploy.config.ts',
  },
});

// FIXME: loaded successfully by unconfig
// export default {
//   from: 'uni-app-deploy.config.ts',
//   hello: {
//     unconfig: 'uni-app-deploy.config.ts',
//   },
// };
