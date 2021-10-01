import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async auth(username: string, password: string) {
    const user = await this.userModel
      .find({ username: username, password: password })
      .exec();
    if (user.length) {
      console.log(user[0]);
      return { access_token: this.jwtService.sign(user[0].toJSON()) };
    }
    return null;
  }
}
