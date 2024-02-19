import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'

const forumApp = createApp(App)
forumApp.use(router)

// Register Global Apps automaticaly with name App in components
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseConponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(baseConponentName, baseComponentConfig)
})

forumApp.mount('#app')
