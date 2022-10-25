import { simplePromisify } from '../utils';

export const getSavedFileInfo = simplePromisify(uni.getSavedFileInfo);
