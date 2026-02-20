/**
 * @file jest.config.ts
 * @brief Jest configuration for unit tests.
 * @details Exports a Jest configuration object used by the NestJS test runner.
 *          Configures TypeScript transformation, module resolution, coverage,
 *          and test environment for the project.
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import type { Config } from "jest";

/**
 * @var config
 * @type Config
 * @brief Jest configuration object.
 * @details Root Jest config: module extensions, rootDir, test regex, ts-jest
 *          transform, coverage collection and directory, and Node test environment.
 */
const config: Config = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
};

export default config;
