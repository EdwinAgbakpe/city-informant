import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { bcryptConstants } from './constants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      bcryptConstants.salt,
    );
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save().catch((error) => {
      return error;
    });
  }

  async findOne(username: string) {
    return this.userModel.findOne({ username });
  }
}
