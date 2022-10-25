import { simplePromisify } from '../utils';

export const getUserInfo = simplePromisify(uni.getUserInfo);
