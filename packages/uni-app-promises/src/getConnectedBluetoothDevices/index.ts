import { simplePromisify } from '../utils';

export const getConnectedBluetoothDevices = simplePromisify(uni.getConnectedBluetoothDevices);
