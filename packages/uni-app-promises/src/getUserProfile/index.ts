import { simplePromisify } from '../utils';

export const getUserProfile = simplePromisify(uni.getUserProfile);
