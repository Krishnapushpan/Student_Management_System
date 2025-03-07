import { Controller, Post, Body, Res, HttpStatus, Get, Param, NotFoundException } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Response } from 'express';

@Controller('adminroute')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('addattend')
  async addAttendance(@Body() attendanceData, @Res() res: Response) {
    try {
      console.log("Received Data:", attendanceData); // Debugging
      const result = await this.attendanceService.createAttendance(attendanceData);
      return res.status(HttpStatus.CREATED).json({ message: "Attendance recorded successfully", data: result });
    } catch (error) {
      console.error("Error saving attendance:", error);

      if (error.code === 11000) {
        return res.status(HttpStatus.BAD_REQUEST).json({ 
          message: "Duplicate attendance record found",
          error: error.message
        });
      }

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "Error saving attendance" });
    }
  }

  @Get(':registerno')
  async getAttendanceByRegNo(@Param('registerno') registerno: string, @Res() res: Response) {
  
    try {
      const attendanceData = await this.attendanceService.findByRegNo(registerno);

      if (!attendanceData) {
        throw new NotFoundException("Student attendance record not found");
      }

      return res.status(HttpStatus.OK).json(attendanceData);
    } catch (error) {
      return res.status(error.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message || "Error retrieving attendance record",
      });
    }
  }
}
