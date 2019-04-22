import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store ,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyACFnWlAr0P9Hkb6BFjNOUHak44LseZzaE',
      authDomain: 'kolkata-devmeetup.firebaseapp.com',
      databaseURL: 'https://kolkata-devmeetup.firebaseio.com',
      projectId: 'kolkata-devmeetup',
      storageBucket: 'kolkata-devmeetup.appspot.com'
    })
  }
}).$mount('#app')
