import Vue from 'vue'
import App from './App.vue'
import BaseModal from './components/BaseModal.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle, faSchool, faBaby, faBuilding, faDrum, faFutbol, faHeart, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faLinkedin,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";

library.add(faInfoCircle, faSchool, faBaby, faBuilding, faDrum, faFutbol, faHeart, faPauseCircle, faHtml5, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('BaseModal', BaseModal)

Vue.config.productionTip = false

require("./assets/main.scss")

new Vue({
  render: h => h(App),
}).$mount('#app')
