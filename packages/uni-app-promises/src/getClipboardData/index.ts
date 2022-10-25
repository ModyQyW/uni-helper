import { simplePromisify } from '../utils';

export const getClipboardData = simplePromisify(uni.getClipboardData);
