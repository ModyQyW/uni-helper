import { simplePromisify } from '../utils';

export const setStorage = simplePromisify(uni.setStorage);
