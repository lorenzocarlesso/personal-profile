import Vue from 'vue'
import App from './App.vue'
import BaseModal from './components/BaseModal.vue'
import BaseBox from './components/BaseBox.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInfoCircle, faSchool, faBaby, faBuilding, faDrum, faFutbol, faHeart, faPauseCircle, faGamepad, faChild } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faLinkedin,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";

library.add(faInfoCircle, faSchool, faBaby, faBuilding, faDrum, faFutbol, faHeart, faPauseCircle, faGamepad, faChild, faHtml5, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('BaseModal', BaseModal)
Vue.component('BaseBox', BaseBox)

Vue.config.productionTip = false

require("./assets/main.scss")

new Vue({
  render: h => h(App),
}).$mount('#app')
