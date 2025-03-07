import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateAttendanceDto {
  @IsString()
  @IsNotEmpty()
  registerno: string;

  @IsString()
  @IsOptional()
  semester?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsNotEmpty()
  level: string;

  @IsString()
  @IsOptional()
  course?: string;

  @IsString()
  @IsOptional()
  batch?: string;

  @IsNumber()
  @IsOptional()
  year?: number;
}

export class UpdateAttendanceDto {
  @IsString()
  @IsOptional()
  semester?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  level?: string;

  @IsString()
  @IsOptional()
  course?: string;

  @IsString()
  @IsOptional()
  batch?: string;

  @IsNumber()
  @IsOptional()
  year?: number;
}
