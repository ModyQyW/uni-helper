import { simplePromisify } from '../utils';

export const clearStorage = simplePromisify(uni.clearStorage);
