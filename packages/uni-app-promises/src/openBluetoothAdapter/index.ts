import { simplePromisify } from '../utils';

export const openBluetoothAdapter = simplePromisify(uni.openBluetoothAdapter);
