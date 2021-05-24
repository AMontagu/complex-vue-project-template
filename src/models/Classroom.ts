import User, { UserInterface } from './User'

interface ClassroomInterface {
  id: null|number;
  name: string;
  teacher?: null|UserInterface|User
}

export default class Classroom implements ClassroomInterface {
  detailsFetched = false;

  id: null|number = null;
  name = '';
  teacher: null|UserInterface|User = null;
  rawData: null|ClassroomInterface = null;

  constructor (classroom:ClassroomInterface) {
    this.setData(classroom)
  }

  setData (classroom:ClassroomInterface):void {
    // Handle nested relations
    if (classroom.teacher) {
      this.teacher = new User(classroom.teacher)
      delete classroom.teacher
    }

    Object.assign(this, classroom)
    this.rawData = classroom
  }
}

export { ClassroomInterface }
