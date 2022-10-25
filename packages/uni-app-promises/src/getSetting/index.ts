import { simplePromisify } from '../utils';

export const getSetting = simplePromisify(uni.getSetting);
