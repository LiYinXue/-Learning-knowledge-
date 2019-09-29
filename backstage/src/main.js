// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import { Header, Aside, Container, Main, Menu, MenuItem, Form, FormItem, Input, Button, Table, TableColumn } from 'element-ui'
import router from './router'
import '../static/iconfont/iconfont.css'
// require('./mock/index.js')
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Header).use(Aside).use(Container).use(Main).use(Menu).use(MenuItem).use(Form).use(FormItem).use(Input).use(Button).use(Table).use(TableColumn)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
