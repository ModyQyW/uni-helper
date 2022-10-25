import { simplePromisify } from '../utils';

export const saveFile = simplePromisify(uni.saveFile);
