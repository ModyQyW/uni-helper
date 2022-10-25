import { simplePromisify } from '../utils';

export const createPushMessage = simplePromisify(uni.createPushMessage);
