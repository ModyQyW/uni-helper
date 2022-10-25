import { simplePromisify } from '../utils';

export const getSelectedTextRange = simplePromisify(uni.getSelectedTextRange);
