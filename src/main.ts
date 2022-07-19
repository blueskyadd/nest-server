import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create() 方法返回一个实现 INestApplication 接口的对象
  const app = await NestFactory.create(AppModule);
  // 监听3000的端口
  await app.listen(3000);
}
bootstrap();
