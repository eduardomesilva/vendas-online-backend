import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { promises } from 'dns';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async creatUser( @Body() creatUser: CreateUserDto ): Promise<User>
    {    
        return this.userService.createUser(creatUser)   
    }

    @Get()
    async getAllUser(): Promise<User[]>{
        return this.userService.getAlUser()
    }
}
