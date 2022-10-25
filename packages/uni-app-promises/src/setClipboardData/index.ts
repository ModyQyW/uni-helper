import { simplePromisify } from '../utils';

export const setClipboardData = simplePromisify(uni.setClipboardData);
