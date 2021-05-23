import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { configure } from './configure';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const port = process.env.PORT || 3333;

  configure(app);

  await app.listen(port);
  Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);
}

bootstrap();
