import { Model } from '@vuex-orm/core'

export default class Student extends Model {
  // entity is a required property for all models.
  static entity = 'student'

  // List of all fields (schema) of the post model. `this.attr()` declares
  // a generic field type with a default value as the first argument.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fields ():any {
    return {
      id: this.attr(null),
      name: this.attr(''),
      detailsFetched: this.boolean(false)
    }
  }

  id!: number | null;
  name!: string;
  detailsFetched!: boolean;
}
