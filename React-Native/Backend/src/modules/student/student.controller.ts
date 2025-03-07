import { Controller, Post,Put, Get, Body, Query, Delete, Param, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';
import { UpdateStudentDto } from './dto/update-student.dto';


@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('add')
  async addStudent(@Body() studentData: Student): Promise<{ message: string }> {
    await this.studentService.addStudent(studentData);
    return { message: 'Student added successfully' };
  }

  @Get('all')
  async getAllStudents(): Promise<{ students: Student[] }> {
    const students = await this.studentService.getAllStudents();
    return { students };
  }
  @Get('getstudents')
async getStudents(@Query() query: any) {

  
  return this.studentService.getFilteredStudents(query);
}
  @Delete('delete/:registerno')
async deleteStudent(@Param('registerno') registerno: string) {
  const result = await this.studentService.deleteStudent(registerno);
  if (result.deletedCount === 0) {
    throw new NotFoundException('Student not found');
  }
  return { message: 'Student deleted successfully' };
}
@Put('update/:registerno')
async updateStudent(
  @Param('registerno') registerno: string,
  @Body() updateData: UpdateStudentDto,
) {
  const updatedStudent = await this.studentService.updateStudent(registerno, updateData);
  
  if (!updatedStudent) {
    return { success: false, message: "Failed to update student" };
  }
  
  return { success: true, message: "Student updated successfully", student: updatedStudent };
}
}
