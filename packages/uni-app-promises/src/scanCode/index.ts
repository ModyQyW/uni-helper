import { simplePromisify } from '../utils';

export const scanCode = simplePromisify(uni.scanCode);
