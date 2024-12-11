import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateReservationDto {

    // this is where class transformer really shines
    // class transformer is all about transforming this ex. string to Date instance

    @IsDate()
    @Type(() => Date)
    startData: Date;

    @Type(() => Date)
    @IsDate()
    endDate: Date;

    @IsString()
    @IsNotEmpty()
    placeId: string;

    @IsString()
    @IsNotEmpty()
    invoiceId: string;
}
