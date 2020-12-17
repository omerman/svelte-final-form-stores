import resolve from "rollup-plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "umd", name: pkg.name },
    ],
    plugins: [
      resolve(), 
      typescript(),
    ],
  },
];
