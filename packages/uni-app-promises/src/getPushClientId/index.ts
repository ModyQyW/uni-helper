import { simplePromisify } from '../utils';

export const getPushClientId = simplePromisify(uni.getPushClientId);
