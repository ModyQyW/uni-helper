import { simplePromisify } from '../utils';

export const chooseAddress = simplePromisify(uni.chooseAddress);
