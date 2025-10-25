import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.setGlobalPrefix('api');
  app.enableCors();

  await app.listen(process.env.PORT ?? 8080);
  logger.log(
    `Application is running on: localhost:${process.env.PORT ?? 3000} 🚀`,
  );
}
bootstrap();
