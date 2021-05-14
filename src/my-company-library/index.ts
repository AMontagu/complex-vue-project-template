import * as components from './components/index'
import {
  App
} from 'vue'

export default {
  install: (app: App): void => {
    Object.entries(components).forEach(([componentName, component]) => {
      app.component(componentName, component)
    })
  }
}
