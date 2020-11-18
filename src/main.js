import Vue from 'vue'
import App from './App.vue'

import 'material-design-icons/iconfont/material-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import AppDropdown from '@/components/custom/AppDropdown'
import AppDropdownContent from '@/components/custom/AppDropdownContent'
import AppDropdownItem from '@/components/custom/AppDropdownItem'

Vue.config.productionTip = false
Vue.component('app-dropdown', AppDropdown)
Vue.component('app-dropdown-content', AppDropdownContent)
Vue.component('app-dropdown-item', AppDropdownItem)

new Vue({
  render: h => h(App),
}).$mount('#app')
