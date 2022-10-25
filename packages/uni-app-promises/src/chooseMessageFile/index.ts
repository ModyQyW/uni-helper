import { simplePromisify } from '../utils';

export const chooseMessageFile = simplePromisify(uni.chooseMessageFile);
