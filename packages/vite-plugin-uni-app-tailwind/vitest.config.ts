import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
