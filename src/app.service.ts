/**
 * @file app.service.ts
 * @brief Root application service providing greeting and business logic.
 * @details Implements business logic for the root controller, including
 *          a welcome message and a numeric operation used by unit tests.
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import { Injectable } from "@nestjs/common";

/**
 * @class AppService
 * @type class
 * @brief Service for the root application scope.
 * @details Injected into AppController to provide greeting text and
 *          simple logic that can be unit tested in isolation.
 */
@Injectable()
export class AppService {
  /**
   * @fn getHello
   * @type function
   * @brief Returns a welcome message string.
   * @details Used by the root GET endpoint to respond with a fixed greeting.
   *          No parameters or side effects.
   * @returns {string} The welcome message.
   */
  getHello(): string {
    return "Hello World!";
  }

  /**
   * @fn add
   * @type function
   * @brief Adds two numbers for demonstration and unit testing.
   * @details Pure function used to illustrate unit testing of service methods
   *          with explicit number types and edge cases (zero, negatives).
   * @param a - {number} The first operand.
   * @param b - {number} The second operand.
   * @returns {number} The sum of `a` and `b`.
   */
  add(a: number, b: number): number {
    return a + b;
  }
}
