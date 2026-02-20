/**
 * @file app.service.spec.ts
 * @brief Unit tests for AppService.
 * @details Uses Jest and @nestjs/testing to create an isolated testing module,
 *          retrieve AppService, and assert on getHello() and add() including
 *          edge cases (zero, negative numbers).
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import { Test, type TestingModule } from "@nestjs/testing";
import { AppService } from "./app.service";

describe("AppService", () => {
  /**
   * @var appService
   * @type AppService
   * @brief Instance of AppService under test.
   * @details Set in beforeAll after compiling the testing module.
   */
  let appService: AppService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();
    appService = app.get<AppService>(AppService);
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      const result: string = appService.getHello();
      expect(result).toBe("Hello World!");
    });
  });

  describe("add", () => {
    it("should add two positive numbers", () => {
      const a: number = 2;
      const b: number = 3;
      const result: number = appService.add(a, b);
      expect(result).toBe(5);
    });

    it("should add zero and a number", () => {
      const a: number = 0;
      const b: number = 7;
      const result: number = appService.add(a, b);
      expect(result).toBe(7);
    });

    it("should add negative numbers", () => {
      const a: number = -1;
      const b: number = -2;
      const result: number = appService.add(a, b);
      expect(result).toBe(-3);
    });

    it("should add positive and negative number", () => {
      const a: number = 10;
      const b: number = -4;
      const result: number = appService.add(a, b);
      expect(result).toBe(6);
    });
  });
});
