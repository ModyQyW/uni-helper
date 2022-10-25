import { simplePromisify } from '../utils';

export const checkIsSupportSoterAuthentication = simplePromisify(
  uni.checkIsSupportSoterAuthentication,
);
