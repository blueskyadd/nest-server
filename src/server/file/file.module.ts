import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { fileSchema } from './file.schema';
import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Files', schema: fileSchema }])],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
