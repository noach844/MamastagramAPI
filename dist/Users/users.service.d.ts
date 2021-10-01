import { Model } from 'mongoose';
import { UserDocument } from './users.schema';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    auth(username: string, password: string): Promise<{
        access_token: string;
    }>;
}
