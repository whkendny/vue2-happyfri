/*引入要使用的组件*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由配置*/
import routes from './router/router'

/*将store注入vue实例*/
import store from './store/'
/*数据请求*/
import ajax from './config/ajax'

/*引入样式相关的
* style放入公共样式
* rem.进行适配
* */
import './style/common'
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')
