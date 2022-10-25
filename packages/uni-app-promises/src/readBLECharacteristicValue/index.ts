import { simplePromisify } from '../utils';

export const readBLECharacteristicValue = simplePromisify(uni.readBLECharacteristicValue);
