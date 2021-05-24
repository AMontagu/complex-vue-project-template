import { ref, Ref } from 'vue'
import { RouteLocationRaw } from 'vue-router'

interface NavigationLink {
  name: string;
  to: RouteLocationRaw
}

interface ReturnNavigation {
  navigationLinks: Ref<Array<NavigationLink>>
}

export const useSchoolNavigations = (): ReturnNavigation => {
  const navigationLinks = ref([
    {
      to: { name: 'SchoolDetails' },
      name: 'SchoolDetails'
    },
    {
      to: { name: 'ClassRoomsList' },
      name: 'ClassRoomsList'
    },
    {
      to: { name: 'OtherRooms' },
      name: 'OtherRooms'
    }
  ])

  return {
    navigationLinks
  }
}

export const useClassroomNavigations = (classroomId:string): ReturnNavigation => {
  const navigationLinks = ref([
    {
      to: { name: 'ClassroomDetails', params: { classroomId } },
      name: 'ClassroomDetails'
    },
    {
      to: { name: 'StudentsList', params: { classroomId } },
      name: 'StudentsList'
    }
  ])

  return {
    navigationLinks
  }
}

export const useOtherRoomsNavigations = (): ReturnNavigation => {
  const navigationLinks = ref([
    {
      to: { name: 'Refectory' },
      name: 'Refectory'
    },
    {
      to: { name: 'Administration' },
      name: 'Administration'
    }
  ])

  return {
    navigationLinks
  }
}
