import { simplePromisify } from '../utils';

export const getBLEDeviceCharacteristics = simplePromisify(uni.getBLEDeviceCharacteristics);
