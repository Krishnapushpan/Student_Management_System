import { Injectable, ConflictException,UnauthorizedException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './user.dto';
import { LoginUserDto } from './user.dto';

import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { registerno, email, password } = createUserDto;

  
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) throw new ConflictException('User already exists');

    const userCount = await this.userModel.countDocuments();
    const userType = userCount === 0 ? 'admin' : 'user';

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      registerno,
      email,
      password: hashedPassword,
      userType,
    });

    return newUser.save();
  }
  async login(loginUserDto: LoginUserDto): Promise<any> {
    const { registerno, password } = loginUserDto;

    const user = await this.userModel.findOne({ registerno });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('Invalid credentials');

    return { registerno: user.registerno, userType: user.userType };
  }
}
