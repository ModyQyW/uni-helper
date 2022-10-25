import { simplePromisify } from '../utils';

export const checkSession = simplePromisify(uni.checkSession);
