import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

import pkg from './package.json';
import tsconfig from './tsconfig.json'

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			nodeResolve(),
			commonjs(),
			typescript(tsconfig)
		]
	},
	{
		input: "src/index.ts",
		output: [{ file: pkg.types, format: "es" }],
		plugins: [dts.default()],
	}
]