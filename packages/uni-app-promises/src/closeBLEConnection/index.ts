import { simplePromisify } from '../utils';

export const closeBLEConnection = simplePromisify(uni.closeBLEConnection);
