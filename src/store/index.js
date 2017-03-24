import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'
import util from '../util'


Vue.use(Vuex);

const state = {
	curTab: '',
	topicList:[]
}

const actions = {
	async FETCH_TOPIC_LIST({ commit, state }, {page, limit, tab}){
		let res  = await api.getTopics(page, limit, tab);
		if(res.status == 200){
			let data = res.data.data;		
			data.forEach( item => {
				item.createTime = util.formatDuration(item.create_at);
				item.lastReplyTime = util.formatDuration(item.last_reply_at);			
			})
			console.log(state.curTab);
			if(state.curTab === tab){
				commit('ADD_TOPIC_LIST', data);
			} else {
				commit('SET_TOPIC_LIST', data);
			}
			commit('SET_CUR_TAB', tab);
		}
	}
}

const mutations = {
	SET_TOPIC_LIST(state, topicList){
		state.topicList = topicList;
	},

	ADD_TOPIC_LIST(state, topicList){
		state.topicList = state.topicList.concat(topicList);
	},

	SET_CUR_TAB(state, tab){
		state.curTab = tab
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
