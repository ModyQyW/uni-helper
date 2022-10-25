import { simplePromisify } from '../utils';

export const startBluetoothDevicesDiscovery = simplePromisify(uni.startBluetoothDevicesDiscovery);
