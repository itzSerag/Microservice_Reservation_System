import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersRepo } from './users.repo';

@Injectable()
export class UsersService {

    constructor(private readonly userRepo: UsersRepo) { }

    async createUser(createUserDto: CreateUserDto) {
        return this.userRepo.create(createUserDto)
    }

    async findUser(_id: string) {
        return this.userRepo.findOne({ _id })
    }
}
