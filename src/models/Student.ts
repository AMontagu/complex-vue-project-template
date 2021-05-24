import { Model } from '@vuex-orm/core'

interface StudentInterface {
  id: null|number;
  name: string;
}

export default class Student extends Model {
  // entity is a required property for all models.
  static entity = 'student'

  // List of all fields (schema) of the post model. `this.attr()` declares
  // a generic field type with a default value as the first argument.
  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      average_grade: this.attr(null)
    }
  }
}

export { StudentInterface }
