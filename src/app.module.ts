/**应用程序的根模块 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { FileModule } from './server/file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test'),
    UserModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
