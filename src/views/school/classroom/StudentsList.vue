<template>
  <div>
    <h1>StudentList</h1>
    <SimpleDatatable
      :items="students"
      :headers="['id', 'name']"
      @row-click="goToStudent"
    />
  </div>
</template>

<script lang="ts">
import { mapRepos, ModelsOrRepositories } from '@vuex-orm/core'
import Student, { StudentInterface } from '@/models/Student'
import { defineComponent } from 'vue'
import StudentService from '@/services/StudentService'

export default defineComponent({
  name: 'StudentList',
  computed: {
    ...mapRepos({
      studentRepo: Student
    }),
    classroomId ():string {
      return this.$route.params.classroomId as string
    },
    students ():Array<Student> {
      return this.studentRepo.all()
    }
  },
  async created () {
    const students = await StudentService.getListStudent(this.classroomId)
    this.studentRepo.insert(students)
  },
  methods: {
    goToStudent (student:StudentInterface):void {
      if (!student.id) {
        return
      }
      this.$router.push({ name: 'StudentDetails', params: { classroomId: this.classroomId, studentId: student.id } })
    }
  }
})
</script>

<style>

</style>
