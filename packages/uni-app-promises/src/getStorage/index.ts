import { simplePromisify } from '../utils';

export const getStorage = simplePromisify(uni.getStorage);
