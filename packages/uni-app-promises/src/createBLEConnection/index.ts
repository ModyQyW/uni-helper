import { simplePromisify } from '../utils';

export const createBLEConnection = simplePromisify(uni.createBLEConnection);
