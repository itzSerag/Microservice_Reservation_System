import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './decorator/curr-user.decorator';
import { UsersDocument } from './users/models/users.schema';
import { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: UsersDocument,
    @Res({ passthrough: true }) res: Response
  ) {

    await this.authService.login(user, res)
    res.send(user)
  }
}


