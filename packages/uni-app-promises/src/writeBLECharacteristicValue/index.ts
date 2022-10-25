import { simplePromisify } from '../utils';

export const writeBLECharacteristicValue = simplePromisify(uni.writeBLECharacteristicValue);
