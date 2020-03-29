import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局样式表
import './assets/css/global.css'
// import './assets/css/style.css'
import TreeTable from 'vue-table-with-tree-grid'
// 字体图标
import './assets/iconfont/iconfont.css'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 导入富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 导入Nprogress包对应的js css
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import axios from 'axios'

//配置请求根路径
axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
//请求拦截器request，在request中展示进度条Nprogress.start()
axios.interceptors.request.use(config => {
  Nprogress.start()
   config.headers.Authorization = window.sessionStorage.getItem('token')
  //在最后必须return config
  return config
})
// 在response中展示进度条Nprogress.done()
axios.interceptors.request.use(config => {
  Nprogress.done()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //在最后必须return config
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.component('tree-table',TreeTable)
// 全局注册富文本编辑器
Vue.use(VueQuillEditor)

Vue.filter('dataFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  // yyyy-mm-dd hh:mm:ss
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
