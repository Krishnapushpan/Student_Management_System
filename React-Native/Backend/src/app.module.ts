import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module'; 
import { AttendanceModule } from './modules/attendance/attendance.module';
import { StudentModule } from './modules/student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/StudentManagement'),
    UserModule,
    AttendanceModule,
    StudentModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
