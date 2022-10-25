import { simplePromisify } from '../utils';

export const requestSubscribeMessage = simplePromisify(uni.requestSubscribeMessage);
