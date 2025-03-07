import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument} from './student.schema';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  async addStudent(studentData: Student): Promise<Student> {
    const newStudent = new this.studentModel(studentData);
    return newStudent.save();
  }

  async getAllStudents(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
  async getFilteredStudents(query: any): Promise<Student[]> {
    return this.studentModel.find(query).exec();
  }
  async deleteStudent(registerno: string) {
    return await this.studentModel.deleteOne({ registerno });
  }
  async updateStudent(registerno: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const updatedStudent = await this.studentModel.findOneAndUpdate(
      { registerno },
      { $set: updateStudentDto },
      { new: true }
    );

    if (!updatedStudent) {
      throw new NotFoundException(`Student with register number ${registerno} not found`);
    }

    return updatedStudent;
  }
}
