import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    auth(username: string, password: string): Promise<User[]>;
}
