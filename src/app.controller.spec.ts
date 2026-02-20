/**
 * @file app.controller.spec.ts
 * @brief Unit tests for AppController with a mocked AppService.
 * @details Uses Test.createTestingModule and overrideProvider (NestJS testing
 *          utilities) to supply a mock AppService, and demonstrates jest.spyOn
 *          for verifying controller behaviour in isolation.
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import { Test, type TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

/**
 * @interface MockAppService
 * @type interface
 * @brief Shape of the mock used in place of AppService.
 * @details Contains only the methods that AppController calls so that
 *          unit tests do not depend on the real service implementation.
 */
interface MockAppService {
  getHello: () => string;
}

describe("AppController", () => {
  /**
   * @var appController
   * @type AppController
   * @brief Controller instance under test.
   * @details Obtained from the compiled testing module.
   */
  let appController: AppController;

  /**
   * @var mockGetHello
   * @type jest.Mock<string, []>
   * @brief Mock function for AppService.getHello.
   * @details Used with overrideProvider to control the return value in tests.
   */
  let mockGetHello: jest.Mock<string, []>;

  beforeAll(async () => {
    mockGetHello = jest.fn<string, []>().mockReturnValue("Hello from mock");
    const mockService: MockAppService = {
      getHello: mockGetHello,
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockService,
        },
      ],
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  it("should return the greeting from the mocked service", () => {
    const result: string = appController.getHello();
    expect(result).toBe("Hello from mock");
  });

  it("should call the service getHello method once", () => {
    mockGetHello.mockClear();
    appController.getHello();
    expect(mockGetHello).toHaveBeenCalledTimes(1);
  });
});
