import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'
import moment from 'moment'

Vue.use(Vuex);

let state = {

}

const actions = {
	async FETCH_TOPIC_LIST({ commit }, {page, limit, tab}){
		let res  = await api.getTopics(page, limit, tab);
		if(res.status == 200){
			let data = res.data.data;
			moment.locale('zh-cn');
			console.log(moment.locale());
			console.log(moment(data[0].create_at, 'YYYY年MM月DD天').fromNow());
			data.forEach( item => {
				// item.createTime = new Date(item.create_at);
				

			})
			commit('SET_TOPIC_LIST', data);
		}
	}
}

const mutations = {
	SET_TOPIC_LIST(state, topicList){
		state.topicList = topicList;
	}
}

const getters = {

}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})