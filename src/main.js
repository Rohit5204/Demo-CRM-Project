import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'
import Sidebar from '@/components/Sidebar.vue';
import blank from '@/views/Layout/Blank.vue';
import side from '@/views/Layout/Default.vue';
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.component('sidebar', Sidebar)
Vue.component("blank-layout",blank)
Vue.component("side-layout",side)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
