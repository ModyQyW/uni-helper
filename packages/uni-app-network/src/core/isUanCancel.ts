import { UanCancel } from './UanCancelToken';

export const isUanCancel = (value: any): value is UanCancel => value?.isUanCanceledError === true;
