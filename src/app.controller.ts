import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }
}

// 用户信息
@Controller('user')
export class UserController {
  @Get('users')
  async findAll(): Promise<any> {
    return await 'hello';
  }
}
