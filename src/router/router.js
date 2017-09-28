/*路由配置*/
import App from '../App'

export default [{
    path: '/',
    component: App,
    // 子路由配置, 将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们。
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
