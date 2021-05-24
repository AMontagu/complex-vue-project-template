import myAppClient from '@/setup/myAppClient'

interface ClassRoom {
  id: number;
  name: string;
}

class ClassroomService {
  async getListClassroom (): Promise<ClassRoom[]> {
    return await myAppClient.get('/classrooms/')
  }
}

const classroomService = new ClassroomService()

export default classroomService
