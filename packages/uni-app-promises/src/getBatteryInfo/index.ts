import { simplePromisify } from '../utils';

export const getBatteryInfo = simplePromisify(uni.getBatteryInfo);
