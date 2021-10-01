import { UsersService } from './users.service';
import { CreateLoginDto } from './user.dtos';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    auth(loginDto: CreateLoginDto): Promise<Boolean>;
}
