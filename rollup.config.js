import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

//NEW
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      // NEW
      typescript(),
      peerDepsExternal(),

      resolve(),
      postcss({
        extract: true,
        minimize: true,
      }),
      commonjs(),

      // NEW
      terser(),
    ],
  },
  {
    input: "dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default(), peerDepsExternal(), resolve(), commonjs()],
    external: ["react", "react-dom", /\.css$/],
  },
];
