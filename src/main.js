/*引入要使用的组件*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*路由配置*/
import routes from './router/router'

/*将store注入vue实例*/
import store from './store/'
/*数据请求*/
import ajax from './config/ajax.js'

/*引入样式相关的
* style放入公共样式
* rem.进行适配
* */
import './style/common.less'
import './config/rem.js'

//在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
Vue.use(VueRouter)
//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
	routes
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
new Vue({
	router,
	store,
}).$mount('#app')
