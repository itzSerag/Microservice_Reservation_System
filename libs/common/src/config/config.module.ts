import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: Joi.object({
        // no need to through just get -- already there is a verification on it 
        MONGODB_URI: Joi.string().required(),
      }),
    }),
  ],
})

export class ConfigModule { }
