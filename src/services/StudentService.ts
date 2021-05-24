import myAppClient from '@/setup/myAppClient'
import Student from '@/models/Student'

class StudentService {
  async getListStudent (classroomId:string): Promise<Student[]> {
    const response = await myAppClient.get('/api/students/', { params: { classroomId } })
    return response.data
  }

  async getDetailsStudent (classroomId:string, studentId: string): Promise<Student> {
    const response = await myAppClient.get(`/api/students/${studentId}/`, { params: { classroomId } })
    return response.data
  }
}

const studentService = new StudentService()

export default studentService
