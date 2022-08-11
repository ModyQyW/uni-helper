import { useRouter } from '../useRouter';

export function usePages() {
  const { pages } = useRouter();

  return pages;
}
