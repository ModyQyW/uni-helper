import { simplePromisify } from '../utils';

export const stopBluetoothDevicesDiscovery = simplePromisify(uni.stopBluetoothDevicesDiscovery);
