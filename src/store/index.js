/*
* 挂载store
* */

import Vue from 'vue'
import Vuex from 'vuex'
// 状态改变模块
import mutations from './mutations'
// actions 模块
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

// store 实例 单一状态树
const state = {
	level: '第一周',
	itemNum: 1,
	allTime: 0,
	timer: '',
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "题目一",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 66,
			"topic_id": 20,
			"answer_name": "答案aaaa",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 67,
			"topic_id": 20,
			"answer_name": "答案bbbb",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 68,
			"topic_id": 20,
			"answer_name": "答案cccc",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 69,
			"topic_id": 20,
			"answer_name": "答案dddd",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "题目二",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 70,
			"topic_id": 21,
			"answer_name": "答案A",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 71,
			"topic_id": 21,
			"answer_name": "答案B",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 72,
			"topic_id": 21,
			"answer_name": "答案C",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 73,
			"topic_id": 21,
			"answer_name": "答案D",
			"is_standard_answer": 0
		}]
	}],
	answerid: {}
}

// 创建store实例并模块化输出;
export default new Vuex.Store({
	state,
	actions,
	mutations
})
