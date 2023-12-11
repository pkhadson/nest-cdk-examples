import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { getHandler, Handler } from '@nest-cdk/core';

const _app = NestFactory.create(AppModule);

if (!process.env.LAMBDA_TASK_ROOT && !process.env.GENERATE) {
  // check if is lambda or build_mode
  const bootstrap = async () => {
    const app = await _app;
    app.enableCors();
    await app.listen(1702); // in no lambda mode
  };

  bootstrap();
}

export const handler: Handler = getHandler(_app);
global['handler'] = handler;
