import { AbstractRepo } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReservationDocument } from "./models/reservation.schema";
import { Model } from "mongoose";


@Injectable()
export class ReservationRepo extends AbstractRepo<ReservationDocument> {

    protected readonly logger = new Logger(ReservationRepo.name)

    constructor(@InjectModel(ReservationDocument.name) reservationModel: Model<ReservationDocument>) {
        // we inhereted all what in abstract so it mustttt super() 
        super(reservationModel)
    }
}
