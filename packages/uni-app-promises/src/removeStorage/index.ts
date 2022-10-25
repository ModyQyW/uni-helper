import { simplePromisify } from '../utils';

export const removeStorage = simplePromisify(uni.removeStorage);
