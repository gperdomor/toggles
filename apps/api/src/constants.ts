import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { FastifyCompressOptions } from 'fastify-compress';
import * as helmet from 'helmet';

export const helmetOptions: Parameters<typeof helmet>[0] = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [`'self'`],
      styleSrc: [`'self'`, `'unsafe-inline'`],
      imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
      scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
    },
  },
};

export const corsOptions: CorsOptions = {};

export const compressOptions: FastifyCompressOptions = {
  encodings: ['gzip', 'deflate'],
};
