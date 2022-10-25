import { simplePromisify } from '../utils';

export const getProvider = simplePromisify(uni.getProvider);
