import { simplePromisify } from '../utils';

export const getVideoInfo = simplePromisify(uni.getVideoInfo);
