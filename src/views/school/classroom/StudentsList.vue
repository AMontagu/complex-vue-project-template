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
import { mapRepos } from '@vuex-orm/core'
import Student from '@/models/Student'
import { defineComponent } from 'vue'
import studentService from '@/services/StudentService'

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
    const students = await studentService.getListStudent(this.classroomId)
    students.forEach(student => {
      if (!student.id) {
        console.log('return')
        return
      }
      if (!this.studentRepo.find(student.id)) {
        this.studentRepo.insert(student)
      } else {
        this.studentRepo.update(student)
      }
    })
  },
  methods: {
    goToStudent (student:Student):void {
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
