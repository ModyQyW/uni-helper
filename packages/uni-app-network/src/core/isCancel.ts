import { UanCancel } from './UanCancelToken';

export const isCancel = (value: any): value is UanCancel => value?.isUanCanceledError === true;
