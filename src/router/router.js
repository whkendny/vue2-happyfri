/*路由配置*/
import App from '../App.vue'

export default [{
    path: '/',
    component: App,  //注册全局的component;
    
    // 子路由配置, 将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们。
    // r => require.ensure([], () => r(require('../page/home')), 'home') 分块打包,懒加载组件
    //详见: https://router.vuejs.org/zh-cn/advanced/lazy-loading.html
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]
