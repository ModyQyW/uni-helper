import { simplePromisify } from '../utils';

export const removeSavedFile = simplePromisify(uni.removeSavedFile);
