import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    versionKey: false,
    timestamps: true,
})
// the decorator tells hey this model will gonna be a schema ok!  
// here we making a document --> which will turn to schema later
export class UsersDocument extends AbstractDocument {


    @Prop()
    email: string

    @Prop()
    password: string
}

// i guess it checking for validation also
// here because document supports alot of methods and so on and iam making this into a schema 
export const UsersSchema = SchemaFactory.createForClass(UsersDocument)