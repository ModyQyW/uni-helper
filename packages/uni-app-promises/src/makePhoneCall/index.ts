import { simplePromisify } from '../utils';

export const makePhoneCall = simplePromisify(uni.makePhoneCall);
