import { simplePromisify } from '../utils';

export const setScreenBrightness = simplePromisify(uni.setScreenBrightness);
