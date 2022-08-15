import { useNetwork } from '../useNetwork';

/**
 * Get online info
 */
export function useOnline() {
  const { isOnline } = useNetwork();
  return isOnline;
}
