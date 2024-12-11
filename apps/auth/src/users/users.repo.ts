import { AbstractRepo } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { UsersDocument } from "./models/users.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";



@Injectable()
export class UsersRepo extends AbstractRepo<UsersDocument> {

    protected readonly logger = new Logger(UsersRepo.name);

    constructor(@InjectModel(UsersDocument.name) userModel: Model<UsersDocument>) {
        super(userModel)
    }


} 