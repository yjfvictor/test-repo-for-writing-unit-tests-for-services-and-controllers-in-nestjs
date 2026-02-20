/**
 * @file eslint.config.mts
 * @brief ESLint flat configuration for TypeScript and NestJS.
 * @details Defines rules for TypeScript and Prettier compatibility and
 *          Jest globals for test files.
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import type { Linter } from "eslint";

/**
 * @var tsconfigRootDir
 * @type string
 * @brief Current working directory for tsconfig resolution.
 * @details Used in parserOptions so that path mapping and project refs resolve correctly.
 */
const tsconfigRootDir: string = process.cwd();

/**
 * @var parserOptions
 * @type Linter.ParserOptions
 * @brief Parser options for TypeScript.
 * @details Enables type-aware linting via project reference to tsconfig.json.
 */
const parserOptions: Linter.ParserOptions = {
  project: "./tsconfig.json",
  tsconfigRootDir,
};

/**
 * @var globals
 * @type Linter.Globals
 * @brief Global variables known to the linter.
 * @details Includes Node and Jest globals so they are not reported as undefined.
 */
const globals: Linter.Globals = {
  process: "readonly",
  console: "readonly",
  describe: "readonly",
  it: "readonly",
  test: "readonly",
  expect: "readonly",
  beforeAll: "readonly",
  afterAll: "readonly",
  beforeEach: "readonly",
  afterEach: "readonly",
  jest: "readonly",
};

/**
 * @var typeScriptConfig
 * @type Linter.Config
 * @brief TypeScript-specific ESLint config.
 * @details Applies parser, plugins, and rules to all .ts files.
 */
const typeScriptConfig: Linter.Config = {
  files: ["**/*.ts"],
  languageOptions: {
    parser: tsparser,
    parserOptions,
    globals,
  },
  plugins: {
    "@typescript-eslint": tseslint,
    prettier,
  },
  rules: {
    ...tseslint.configs.recommended.rules,
    "prettier/prettier": "warn",
  },
};

/**
 * @var config
 * @type Linter.Config[]
 * @brief Exported flat config array.
 * @details Combines recommended ESLint, Prettier, and TypeScript configs.
 */
const config: Linter.Config[] = [
  eslint.configs.recommended,
  prettierConfig as Linter.Config,
  typeScriptConfig,
];

export default config;
