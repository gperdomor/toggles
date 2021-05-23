import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'fastify-compress';
import { fastifyHelmet as helmet } from 'fastify-helmet';
import { compressOptions, corsOptions, helmetOptions } from './constants';

export const configure = async (app: NestFastifyApplication) => {
  app.enableCors(corsOptions);
  app.register(compression, compressOptions);
  app.register(helmet, helmetOptions);

  const config = new DocumentBuilder()
    .setTitle('Toggles API')
    .setDescription('The feature toggles API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('oas', app, document);
};
