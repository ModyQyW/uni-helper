import { useRouter } from '../useRouter';

export function usePage() {
  const { page } = useRouter();
  return page;
}
