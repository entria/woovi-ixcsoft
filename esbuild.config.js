import { build } from 'esbuild';

build({
  entryPoints: ['./src/index.ts'],
  outfile: './build/service-ixcsoft.js',
  bundle: true,
  platform: 'node',
  target: 'node22.12.0',
  format: 'esm',
  external: ['@koa/router', 'elastic-apm-node'],
  banner: {
    js: `
    import { createRequire } from 'module';
    import { URL } from 'node:url';
    const require = createRequire(import.meta.url);
    const __filename = new URL('', import.meta.url).pathname;
    `,
  },
  sourcemap: true,
}).catch(() => process.exit(1));
