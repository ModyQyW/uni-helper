import { simplePromisify } from '../utils';

export const requestPayment = simplePromisify(uni.requestPayment);
