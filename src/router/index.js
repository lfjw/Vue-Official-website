import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  
    {
      path: '/',
      name: 'layout',
      redirect: '/index',
      component: resolve => require(['@/view/layout'], resolve),
      children:[
      	{
		      path: '/index',
		      name: 'index',
		      component: resolve => require(['@/view/index/index'], resolve),
		    },
      ]
    },

  ]
})
