import { UrCancel } from './UrCancelToken';

export const isCancel = (value: any): value is UrCancel => value?.isUrCanceledError === true;
