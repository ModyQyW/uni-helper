import { simplePromisify } from '../utils';

export const closeBluetoothAdapter = simplePromisify(uni.closeBluetoothAdapter);
