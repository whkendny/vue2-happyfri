/*
配置action: 提交Mutations
*/
import ajax from '../config/ajax'

export default {
	// 通过ES2015  [参数解构](https://github.com/lukehoban/es6features#destructuring) 来简化代码的写法
	addNum({ commit, state }, id) {
		commit('REMBER_ANSWER', { id }) //向mutations中的[REMBER_ANSWER]提交答案
		// 问题题号比 问题个数小, 继续答题
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', {
				num: 1
			})
		}
	},

	// 获取数据
	getData({ commit, state }) {
		ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4').
		then(res => {
			commit('GET_DATA', {
				res
			})
		})
	},

 // 初始化数据
	initializeData({ commit }) {
		commit('INITIALIZE_DATA')
	}
}
