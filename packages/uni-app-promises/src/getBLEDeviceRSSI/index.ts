import { simplePromisify } from '../utils';

export const getBLEDeviceRSSI = simplePromisify(uni.getBLEDeviceRSSI);
