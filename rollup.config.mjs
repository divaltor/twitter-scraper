import dts from "rollup-plugin-dts";

export default [
	{
		input: "src/_module.ts",
		output: [
			{
				file: "dist/default/cjs/index.js",
				format: "cjs",
				sourcemap: true,
			},
			{
				file: "dist/default/esm/index.mjs",
				format: "es",
				sourcemap: true,
			},
		],
	},
	{
		input: "src/_module.ts",
		output: [
			{
				file: "dist/node/cjs/index.cjs",
				format: "cjs",
				sourcemap: true,
				inlineDynamicImports: true,
			},
			{
				file: "dist/node/esm/index.mjs",
				format: "es",
				sourcemap: true,
				inlineDynamicImports: true,
			},
		],
	},
	{
		input: "src/_module.ts",
		plugins: [dts()],
		output: {
			file: "dist/types/index.d.ts",
			format: "es",
		},
	},
	// CycleTLS build (Node-only)
	{
		input: "src/_cycletls.ts",
		external: ["cycletls"],
		output: [
			{
				file: "dist/cycletls/cjs/index.cjs",
				format: "cjs",
				sourcemap: true,
			},
			{
				file: "dist/cycletls/esm/index.mjs",
				format: "es",
				sourcemap: true,
			},
		],
	},
	{
		input: "src/_cycletls.ts",
		external: ["cycletls"],
		plugins: [dts()],
		output: {
			file: "dist/cycletls/index.d.ts",
			format: "es",
		},
	},
];
