import { ref } from 'vue'
import { RouteLocationRaw } from 'vue-router'

interface NavigationLink {
  name: string;
  to: RouteLocationRaw
}

interface ReturnNavigation {
  navigationLinks: Array<NavigationLink>
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
      to: { name: 'Classroom' },
      name: 'Classroom'
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
