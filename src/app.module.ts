/**
 * @file app.module.ts
 * @brief Root application module that aggregates controllers and providers.
 * @details Declares AppController and AppService so that the app exposes
 *          the root endpoint and business logic can be unit tested in isolation.
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

/**
 * @class AppModule
 * @type class
 * @brief Root NestJS module for the application.
 * @details Composes the main application by registering AppController and
 *          AppService for the root route and greeting logic.
 */
@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
