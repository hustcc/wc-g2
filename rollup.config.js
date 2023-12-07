import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { visualizer } from 'rollup-plugin-visualizer';

const isBundleVis = !!process.env.BUNDLE_VIS;

module.exports = [{
  input: 'src/index.ts',
  external: ['@antv/g2'],
  output: {
    file: 'dist/wc-g2.min.js',
    name: 'WCG2',
    format: 'umd',
    sourcemap: false,
    globals: {
      '@antv/g2': 'G2',
    }
  },
  plugins: [
    nodePolyfills(),
    resolve(),
    commonjs(),
    typescript(),
    uglify(),
    ...(isBundleVis ? [visualizer()] : []),
  ],
}];
