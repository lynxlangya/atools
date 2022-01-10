import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
// import pkg from './package.json'
const pkg = require('./package.json');
const name = pkg.name.replace(/^@\w+\//, '');

const dir = 'lib';

export default {
  input: 'index.ts',
  output: [
    {
      file: `${dir}/index.umd.js`,
      format: 'umd',
      name: name,
      sourcemap: true,
    },
    {
      file: `${dir}/index.umd.min.js`,
      format: 'umd',
      name: name,
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: `${dir}/index.esm.js`,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: `${dir}/index.esm.min.js`,
      format: 'esm',
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: `${dir}/index.cjs.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `${dir}/index.cjs.min.js`,
      format: 'cjs',
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs({ include: 'node_modules/**' }),
    typescript({ tsconfig: './tsconfig.json', declaration: false }),
  ],
};
