import { simplePromisify } from '../utils';

export const chooseLocation = simplePromisify(uni.chooseLocation);
