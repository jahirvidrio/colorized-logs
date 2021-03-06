const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './dist/index.js',
  platform: 'node',
  target: 'node10.4',
  minify: true,
  external: ['colors'],
  sourcemap: true,
}).catch(() => process.exit(1));
