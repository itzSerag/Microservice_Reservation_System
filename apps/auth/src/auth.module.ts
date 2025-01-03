import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { LoggerModule } from '@app/common/logger/logger.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [UsersModule, LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXP: Joi.string().required(),
        PORT: Joi.number().required()
      })

    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          // by this way we turn this value into sec -- > s
          expiresIn: `$(configService.get('JWT_EXP'))s`,
        }
      }),
      // it MUST because we use already values in envs --> dynamic configs in configService
      inject: [ConfigService]
    })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
