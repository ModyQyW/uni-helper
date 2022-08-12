import { usePages } from '../usePages';

export function usePrevPage() {
  const pages = usePages();
  const page = pages.value.at(-2);
  return page;
}
