import { Model } from 'mongoose';
import { UserDocument } from '../API/Users/users.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    auth(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
