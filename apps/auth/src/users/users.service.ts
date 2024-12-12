import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersRepo } from './users.repo';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(private readonly userRepo: UsersRepo) { }

    async createUser(createUserDto: CreateUserDto) {
        return this.userRepo.create({
            ...createUserDto,
            password: await bcrypt.hash(createUserDto.password, 10)
        })
    }

    async validateUser(email: string, password: string) {

        const user = await this.userRepo.findOne({ email });
        const passwordIsValid = await bcrypt.compare(password, user.password)
        if (!passwordIsValid) {
            throw new UnauthorizedException("Credentials are not valid")
        }

        return user
    }

}
