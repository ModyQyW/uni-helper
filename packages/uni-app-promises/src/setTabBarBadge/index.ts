import { simplePromisify } from '../utils';

export const setTabBarBadge = simplePromisify(uni.setTabBarBadge);
