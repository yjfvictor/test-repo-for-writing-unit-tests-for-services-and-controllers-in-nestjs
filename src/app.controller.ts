/**
 * @file app.controller.ts
 * @brief Root HTTP controller exposing the main application endpoint.
 * @details Handles GET / and delegates to AppService for the response body.
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

/**
 * @class AppController
 * @type class
 * @brief Controller for the root path of the API.
 * @details Registers a single GET handler that returns the greeting from AppService.
 */
@Controller()
export class AppController {
  /**
   * @var appService
   * @type AppService
   * @brief Injected application service.
   * @details Used to obtain the hello message for the root route.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * @fn getHello
   * @type function
   * @brief Handles GET / and returns the greeting.
   * @details Calls AppService.getHello() and returns its value as the response body.
   * @returns {string} The greeting string from the service.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
