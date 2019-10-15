import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CatsModule } from './cats/cats.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('My Cats API')
    .setDescription('Cats API description')
    .setBasePath('/api/cats')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [CatsModule]
  });
  SwaggerModule.setup('api/cats', app, document);

  await app.listen(3000);
}
bootstrap();
