import Vue from 'vue'
import router from './router'
import store from './store'
import * as fb from 'firebase/app'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    let firebaseConfig = {
      apiKey: 'AIzaSyCWSsf1J5kbi-dyETTTfLjYBxs5FbVo3VU',
      authDomain: 'mdmax-ee600.firebaseapp.com',
      databaseURL: 'https://mdmax-ee600.firebaseio.com',
      projectId: 'mdmax-ee600',
      storageBucket: 'mdmax-ee600.appspot.com',
      messagingSenderId: '974948538939'
    }
    fb.initializeApp(firebaseConfig)
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  },
  render: h => h(App)

}).$mount('#app')
