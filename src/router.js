import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Meetups from './components/Meetup/Meetups.vue'
import CreateMeetup from './components/Meetup/CreateMeetup.vue'
import Meetup from './components/Meetup/Meetup.vue'
import Profile from './components/User/Profile.vue'
import Signin from './components/User/Signin.vue'
import Signup from './components/User/Signup.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path : '/meetups',
      name : 'Meetups',
      component : Meetups
    },
    {
      path : '/meetups/new',
      name : 'CreateMeetups',
      component : CreateMeetup
    },
    {
      path : '/meetups/1',
      name : 'Meetup',
      component : Meetup
    },
    {
      path : '/profile',
      name : 'Profile',
      component : Profile
    },
    {
      path : '/signup',
      name : 'Signup',
      component : Signup
    },
    {
      path : '/signin',
      name : 'Signin',
      component : Signin
    },
  ]
})
