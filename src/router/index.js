import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Menu  from '@/components/Menu'
import alarmPoint from '@/alarmmanage/alarmPoint'
import alarmRule from '@/alarmmanage/alarmRule'
import generateTickets from '@/alarmmanage/generateTickets'
import ticketsManage from '@/alarmmanage/ticketsManage'
import vehicleManage from '@/taskSchedule/vehicleManage'
import lineList from '@/taskSchedule/lineList'
import lineEdit from '@/taskSchedule/lineEdit'
import timeList from '@/taskSchedule/timeList'
import taskEdit from '@/taskSchedule/taskEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/menu',
    	name:'Menu',
    	component: Menu,
    	children:[
    	  {
	      	path:'/alarmPoint',
		    component:alarmPoint
		  },
		  {
	      	path:'/alarmRule',
		    component:alarmRule
		  },
		  {
	      	path:'/generateTickets',
		    component:generateTickets
		  },
		  {
	      	path:'/ticketsManage',
		    component:ticketsManage
		  },
		  {
      		path:'/vehicleManage',
      		component:vehicleManage
          },
          {
        		path:'/lineList',
        		component:lineList
          },
          {
        		path:'/lineEdit',
        		component:lineEdit
          },
          {
        		path:'/timeList',
        		component:timeList
          },
          {
        		path:'/taskEdit',
        		component:taskEdit
          }
    	]
    },
    {
    	path:'/*',
    	redirect:'/'
    }
  ]
})
