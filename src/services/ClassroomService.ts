import myAppClient from '@/setup/myAppClient'
import Classroom, { ClassroomInterface } from '@/models/Classroom'

class ClassroomService {
  async getListClassroom (): Promise<Classroom[]> {
    const response = await myAppClient.get('/api/classrooms/')
    const classrooms = response.data.map((classroomData: ClassroomInterface) => {
      return new Classroom(classroomData)
    })
    return classrooms
  }

  async getDetailsClassroom (classroomId: string): Promise<Classroom> {
    const response = await myAppClient.get(`/api/classrooms/${classroomId}/`)
    const classroom = new Classroom(response.data)
    classroom.detailsFetched = true
    return classroom
  }
}

const classroomService = new ClassroomService()

export default classroomService
