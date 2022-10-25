import { simplePromisify } from '../utils';

export const getBLEDeviceServices = simplePromisify(uni.getBLEDeviceServices);
