import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger("bootstrap");
  const configService = app.get(ConfigService);

  // Set Template Engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(
    configService.get<string>('APP_PORT') || 3000,
    "0.0.0.0",
    async () => {
      logger.log(`Application running on ${await app.getUrl()}`);
    }
  );

}
bootstrap();
