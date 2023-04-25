import { defineConfig } from 'tsup';

export default defineConfig({
  clean: false,
  minify: false,
  splitting: false,
  sourcemap: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  entry: ['src/index.ts', 'src/externals/**/*.ts'],
});
