import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateFile } from './file.dto';

@Injectable()
export class FileService {
  constructor(@InjectModel('Files') private readonly fileModel: Model<File>) {}

  // 上传文件
  async upload(body: UpdateFile): Promise<void> {
    await this.fileModel.create(body);
  }
}
