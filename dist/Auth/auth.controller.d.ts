import { CreateLoginDto } from '../API/Users/user.dtos';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    auth(loginDto: CreateLoginDto): Promise<{
        access_token: string;
    }>;
}
