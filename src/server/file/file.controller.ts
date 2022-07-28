import { Body, Controller, Header, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileService } from './file.service';
import { UpdateFile } from './file.dto';
import { FileInterceptor } from '@nestjs/platform-express';

interface FileResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @Header('Access-Control-Allow-Origin', '*')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: UpdateFile): Promise<FileResponse> {
    await this.fileService.upload(file);
    console.log(file);
    return {
      code: 200,
      message: 'Success.',
    };
  }
}
