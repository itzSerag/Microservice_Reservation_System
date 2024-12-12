import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { DatabaseModule } from '@app/common';
import { ReservationRepo } from './reservation.repo';
import { ReservationDocument, ReservationSchema } from './models/reservation.schema';
import { LoggerModule } from '@app/common/logger/logger.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([{
    name: ReservationDocument.name, schema: ReservationSchema
  }]),
    // this logger coming from common that uses pino module
    // as u know common is where everyone can use that code
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required()
      })
    })
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationRepo],
})
export class ReservationsModule { }
