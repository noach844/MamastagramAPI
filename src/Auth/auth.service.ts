import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../API/Users/users.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async auth(username: string, password: string) {
    const user = await this.userModel
      .find({ username: username, password: password })
      .exec();
    if (user.length) {
      const token = this.jwtService.sign(user[0].toJSON());
      return { access_token: token, exp: this.jwtService.verify(token).exp };
    }
    return;
  }
}
