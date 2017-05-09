/*Vuex Mutations 在Vuex store中，实际的改变状态（state）的唯一方式是通过提交（commit）一个mutation(类似事件)
* 参数：
*     state
*    回调函数(handler)[可省]，执行实际修改状态的地方，它将接收 状态(state) 作为第一个参数。
* 详见：http://www.shouce.ren/api/view/a/11739
* 此处是用常量命名Mutations
* */
const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_USER_INFORM = 'GET_USER_INFORM'

export default {
	[GET_DATA](state, payload) {
	  /*
	  * payload参数：
	  * */
	  /*test：
	  * */
	  console.log(payload);
		if (payload.res.httpStatusCode == 200) {
			state.itemDetail = payload.res.topiclist;
		}
	},

	[GET_USER_INFORM](state, payload) {
		state.user_id = payload.res.users_id;
	},

	[ADD_ITEMNUM](state, payload) {
		state.itemNum += payload.num;
	},

	[REMBER_ANSWER](state, payload) {
		state.answerid[state.itemNum] = payload.id;
	},

	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},

	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
	},
}
