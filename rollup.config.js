import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'index.js',
  output: [
    {
      name: 'wxApiPromisify',
      file: pkg.main,
      format: 'umd'
    },
    {
      name: 'wxApiPromisify',
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    resolve({
      main: true,
      browser: true
    }),
  ]
};
