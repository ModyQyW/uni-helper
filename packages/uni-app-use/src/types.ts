import { Ref } from 'vue';
import { MaybeRef } from '@vueuse/core';

export type Parameter<T extends (args: any) => any> = T extends (args: infer P) => any ? P : never;

export type MakeRef<T extends Record<string, any>> = {
  [K in keyof T]: Ref<T[K]>;
};

export type MakeMaybeRef<T extends Record<string, any>> = {
  [K in keyof T]: MaybeRef<T[K]>;
};
