import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faLinkedin,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";

library.add(faInfoCircle, faHtml5, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

require("./assets/main.scss")
require("./assets/timeline.scss")

new Vue({
  render: h => h(App),
}).$mount('#app')
