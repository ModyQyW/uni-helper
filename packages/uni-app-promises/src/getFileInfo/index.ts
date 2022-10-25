import { simplePromisify } from '../utils';

export const getFileInfo = simplePromisify(uni.getFileInfo);
