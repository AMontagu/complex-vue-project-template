<template>
  <div>
    <h1>Student details</h1>

    <p>id: {{student?.id}}</p>
    <p>name: {{student?.name}}</p>
  </div>
</template>

<script lang="ts">
import { mapRepos } from '@vuex-orm/core'
import Student from '@/models/Student'
import { defineComponent } from 'vue'
import studentService from '@/services/StudentService'

export default defineComponent({
  name: 'StudentDetails',
  computed: {
    ...mapRepos({
      studentRepo: Student
    }),
    classroomId ():string {
      return this.$route.params.classroomId as string
    },
    studentId ():string {
      return this.$route.params.studentId as string
    },
    student ():null|Student {
      return this.studentRepo.find(parseInt(this.studentId))
    }
  },
  async created () {
    if (!this.student || !this.student.detailsFetched) {
      console.log('FETCHING DETAILS STUDENT')
      const studentDetails = await studentService.getDetailsStudent(this.classroomId, this.studentId)
      studentDetails.detailsFetched = true
      if (!this.student) {
        this.studentRepo.insert(studentDetails)
      } else {
        this.studentRepo.update(studentDetails)
      }
    }
  }
})
</script>

<style>

</style>
