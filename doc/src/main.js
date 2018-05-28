// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Bourgeon from 'bourgeon'
import App from './App'
import Vuelidate from 'vuelidate';

Vue.use(Bourgeon, {
  locales: ['pt-br', 'en']
})

Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
