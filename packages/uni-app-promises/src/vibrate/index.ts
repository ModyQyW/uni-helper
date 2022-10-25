import { simplePromisify } from '../utils';

// @ts-expect-error
export const vibrate = simplePromisify(uni.vibrate);
