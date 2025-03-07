import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendance } from './attendance.schema';

@Injectable()
export class AttendanceService {
  constructor(@InjectModel(Attendance.name) private attendanceModel: Model<Attendance>) {}

  async createAttendance(attendanceData: any): Promise<Attendance> {
    console.log("Saving to Database:", attendanceData); // Debugging
    return await new this.attendanceModel(attendanceData).save();
  }
  async findByRegNo(registerno: string): Promise<any[]> {
    const attendanceRecords = await this.attendanceModel.find({ 'attendance.registerno': registerno });
  
    if (!attendanceRecords || attendanceRecords.length === 0) {
      throw new NotFoundException("Student attendance record not found");
    }
  
    // Extract only the records for the given registerno
    return attendanceRecords.map(record => ({
      semester: record.semester,
      date: record.date,
      attendance: record.attendance.filter(att => att.registerno === registerno), // ✅ Filter attendance array
    }));
  }
  
}
