import '@vue/runtime-core';
import { UnicloudDb } from './types';

export * from './types';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UnicloudDb: UnicloudDb;
  }
}
