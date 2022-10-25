import { simplePromisify } from '../utils';

export const getBluetoothAdapterState = simplePromisify(uni.getBluetoothAdapterState);
