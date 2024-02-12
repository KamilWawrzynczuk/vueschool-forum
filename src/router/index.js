import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import PageNotFound from '@/components/PageNotFound'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exist cotinue
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          // This is used to not change path that not exists. To be able to still see it in browser
          params: { pathMatch: to.path.substring(1).split('/') },
          // this will not remove query variables and hash
          query: to.query,
          hash: to.hash
        })
      }
      // if not exist redirect to not found
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
