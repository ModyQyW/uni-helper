import { simplePromisify } from '../utils';

export const getScreenBrightness = simplePromisify(uni.getScreenBrightness);
