import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '@app/common';
import { UsersDocument, UsersSchema } from './models/users.schema';
import { UsersRepo } from './users.repo';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersRepo],
  imports: [DatabaseModule, DatabaseModule.forFeature([{
    name: UsersDocument.name, schema: UsersSchema
  }])]
})
export class UsersModule { }
