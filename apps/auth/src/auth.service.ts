import { Injectable } from '@nestjs/common';
import { UsersRepo } from './users/users.repo';
import { UsersDocument } from './users/models/users.schema';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

  constructor(private readonly userRepo: UsersRepo,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) { }


  async login(user: UsersDocument, res: Response) {

    // token payload
    const tokenPayload = {
      userId: user._id.toHexString()
    }

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXP')
    )

    const token = this.jwtService.sign(tokenPayload)
    res.cookie('Authentication', token, {
      httpOnly: true,
      expires
    })

    // that it then the controller and continue its flow
  }


}
