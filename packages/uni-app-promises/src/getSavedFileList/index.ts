import { simplePromisify } from '../utils';

export const getSavedFileList = simplePromisify(uni.getSavedFileList);
