import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {

    @Post()
    async creatUser(
        @Body() creatUser: CreateUserDto
    ) {    
        return {
            ...creatUser,
            password: undefined
        }
    }
}
