import { simplePromisify } from '../utils';

export const login = simplePromisify(uni.login);
