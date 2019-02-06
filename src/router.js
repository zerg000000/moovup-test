import Vue from 'vue'
import Router from 'vue-router'

import FriendList from './views/FriendList.vue'
import FriendView from './views/FriendView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FriendList',
      component: FriendList,
      children: [
        {
          path: '/view/:_id',
          name: 'FriendView',
          component: FriendView
        }
      ]
    }
  ]
})
