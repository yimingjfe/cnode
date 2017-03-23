import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'
import util from '../util'



Vue.use(Vuex);



const state = {
	topicList:[]
}

const actions = {
	async FETCH_TOPIC_LIST({ commit }, {page, limit, tab}){
		let res  = await api.getTopics(page, limit, tab);
		if(res.status == 200){
			let data = res.data.data;		
			data.forEach( item => {
				item.createTime = util.formatDuration(item.create_at);
				item.lastReplyTime = util.formatDuration(item.last_reply_at);			
			})
			commit('SET_TOPIC_LIST', data);
			// setTimeout(() => {
			// 	data.splice(1, 1);
			// 	commit('SET_TOPIC_LIST', data);
			// }, 5000)
		}
	}
}

const mutations = {
	SET_TOPIC_LIST(state, topicList){
		state.topicList = topicList;
	}
}

const getters = {
	topicList: state => state.topicList
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
