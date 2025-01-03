import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }
}
