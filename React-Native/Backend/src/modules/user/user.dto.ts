import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  registerno: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsString()
  userType?: string;
}
//  LoginUserDto for login requests
export class LoginUserDto {
  @IsString()
  registerno: string;

  @IsString()
  password: string;
}