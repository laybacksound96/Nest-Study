import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private postModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    return this.postModel.find().exec();
  }

  async Create(CreateUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.postModel(CreateUserDto);
    return createdUser.save();
  }
}
