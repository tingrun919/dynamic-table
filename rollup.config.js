import path from 'path'
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import vueJsx from '@vitejs/plugin-vue-jsx';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer'
import { terser } from "rollup-plugin-terser";
import WindiCSS from 'rollup-plugin-windicss'

const isDev = process.env.NODE_ENV !== 'production'


// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

export default {
  input: path.resolve(root, 'index.ts'),
  plugins: [
    vueJsx(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    commonjs(),
    WindiCSS(),
    postcss({
      plugins: [
        autoprefixer(),
        cssnano()
      ],
      extract: 'style/index.less'
    }),
    terser(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      presets: ["@vue/babel-preset-jsx"]
    }),
  ],
  external: [
    'vue'
  ],
  output: {
    format: 'es',
    globals: {
      vue: 'Vue',
    },
    sourcemap: isDev,
    exports: 'named',
  },
};
