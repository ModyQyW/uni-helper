import { simplePromisify } from '../utils';

export const notifyBLECharacteristicValueChange = simplePromisify(
  uni.notifyBLECharacteristicValueChange,
);
