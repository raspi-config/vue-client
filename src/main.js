import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
// import 'toastr/build/toastr.min.css'

import Vue from 'vue'
import Root from './Root'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Root/>',
  components: {Root}
})
