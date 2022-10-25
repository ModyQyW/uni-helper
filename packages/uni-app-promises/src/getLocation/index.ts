import { simplePromisify } from '../utils';

export const getLocation = simplePromisify(uni.getLocation);
