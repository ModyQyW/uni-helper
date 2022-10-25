import { simplePromisify } from '../utils';

export const addPhoneContact = simplePromisify(uni.addPhoneContact);
