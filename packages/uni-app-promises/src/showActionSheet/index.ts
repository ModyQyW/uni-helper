import { simplePromisify } from '../utils';

export const showActionSheet = simplePromisify(uni.showActionSheet);
