import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    versionKey: false,
    timestamps: true,
})
// here we making a document --> which will turn to schema later
export class ReservationDocument extends AbstractDocument {


    @Prop()
    startData: Date;

    @Prop()
    endDate: Date;

    @Prop()
    userId: string;

    @Prop()
    placeId: string;

    @Prop()
    invoiceId: string;
}

// i guess it checking for validation also
export const ReservationSchema = SchemaFactory.createForClass(ReservationDocument)