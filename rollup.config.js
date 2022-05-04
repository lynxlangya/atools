import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.ts'];
const dir = 'lib';
const resolve = (...args) => path.resolve(...args);

const config = [
  {
    input: resolve('./index.ts'),
    output: [
      {
        file: resolve(`./${dir}/index.js`),
        format: 'umd',
        name: 'atools',
        sourcemap: true,
      },
      {
        file: resolve(`./${dir}/index.min.js`),
        format: 'umd',
        name: 'atools',
        sourcemap: true,
        plugins: [terser()],
      },
      {
        file: resolve(`./${dir}/index.mjs`),
        format: 'esm',
        name: 'atools',
        sourcemap: true
      },
      {
        file: resolve(`./${dir}/index.min.mjs`),
        format: 'esm',
        name: 'atools',
        sourcemap: true,
        plugins: [terser()],
      }
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions,
      }),
      commonjs({ include: 'node_modules/**' }),
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      babel({
        extensions,
        exclude: 'node_modules/**'
      }),
    ],
  },
  {
    // 生成 .d.ts 类型声明文件
    input: resolve('./index.ts'),
    output: {
      file: resolve('./', pkg.types),
      format: 'es',
    },
    plugins: [dts()],
  },
];

export default config;
