import { simplePromisify } from '../utils';

export const setKeepScreenOn = simplePromisify(uni.setKeepScreenOn);
