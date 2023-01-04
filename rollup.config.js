import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import scss from 'rollup-plugin-scss';

export default [
  {
    input: "./src/components/index.ts",
    output: [
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      scss(),
      json(),
      esbuild({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        sourceMap: false,
        minify: process.env.NODE_ENV === 'production',
        target: 'esnext',
        jsx: 'transform',
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        define: {
          __VERSION__: '"0.1.0"',
        },
        tsconfig: 'tsconfig.json',
        loaders: {
          '.json': 'json',
          '.js': 'jsx',
        },
      }),
    ],
  },
  {
    input :"./src/components/index.ts",
    output:{
      file: "dist/index.d.ts",
      format:'es',
    },
    plugins: [
      dts(),
      scss(),
    ]
  },
];