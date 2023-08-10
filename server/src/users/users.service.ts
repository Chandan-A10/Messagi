import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(user: User) {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findByemail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async findUser(user: User) {
    return this.userModel.findOne({
      email: user.email,
      password: user.password,
    });
  }

  async getAllUser() {
    return this.userModel.find({}).select('-password');
  }
}
