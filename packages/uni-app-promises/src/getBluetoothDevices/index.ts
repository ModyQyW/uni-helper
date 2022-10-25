import { simplePromisify } from '../utils';

export const getBluetoothDevices = simplePromisify(uni.getBluetoothDevices);
