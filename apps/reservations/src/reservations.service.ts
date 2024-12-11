import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationRepo } from './reservation.repo';
import { log } from 'console';

@Injectable()
export class ReservationsService {

  constructor(private readonly reservationRepo: ReservationRepo) { }

  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepo.create({
      ...createReservationDto,
      userId: '123'
    });
  }

  findAll() {
    return this.reservationRepo.find({})
  }

  findOne(_id: string) {
    log(_id)
    return this.reservationRepo.findOne({ _id })
  }

  update(_id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepo.findOneAndUpdate({ _id }, updateReservationDto)
  }

  remove(_id: string) {
    return this.reservationRepo.findOneAndDelete({ _id })
  }
}
