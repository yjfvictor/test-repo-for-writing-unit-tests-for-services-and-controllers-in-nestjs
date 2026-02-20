/**
 * @file main.ts
 * @brief Application entry point that bootstraps the NestJS HTTP server.
 * @details Imports the root AppModule, enables CORS, and listens on a
 *          configurable port. Uses NestFactory to create the application instance.
 * @author Victor Yeh
 * @date 2026-02-20
 * @copyright MIT Licence.
 */

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

/**
 * @fn bootstrap
 * @type function
 * @brief Bootstraps and starts the NestJS HTTP server.
 * @details Creates an application instance from AppModule, enables CORS,
 *          and listens on process.env.PORT or 3000. Logs the base URL on success.
 * @returns {Promise<void>} Resolves when the server is listening.
 */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port: number = Number(process.env["PORT"]) || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
