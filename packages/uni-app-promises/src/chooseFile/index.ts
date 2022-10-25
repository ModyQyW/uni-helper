import { simplePromisify } from '../utils';

export const chooseFile = simplePromisify(uni.chooseFile);
