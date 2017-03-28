import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '../api'
import util from '../util'


Vue.use(Vuex);

const state = {
	curTab: '',
	accesstoken: '',
	user: null,
	curTopic: null,
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
				item.tabString = getTabString(item.tab);		
			})
			if(state.curTab === tab){
				commit('ADD_TOPIC_LIST', data);
			} else {
				commit('SET_TOPIC_LIST', data);
			}
			commit('SET_CUR_TAB', tab);
		}
	},

	async LOGIN({ commit }, accesstoken){
		try{
			let res = await api.login(accesstoken),
					data = res.data;
			if(data.success){
				commit('SET_USER', data);
				commit('SET_ACCESS_TOKEN', accesstoken);
			}			
		} catch (err){
			console.error(err);
		}
	},

	async FETCH_TOPIC_DETAIL({ commit }, topicId){
		try{
			let res = await api.fetchTopicDetail(topicId),
					data = res.data;
			if(data.success){
				let topic = data.data;
				topic.createTime = util.formatDuration(topic.create_at);
				topic.lastReplyTime = util.formatDuration(topic.last_reply_at);					
				topic.tabString = getTabString(topic.tab);	
				commit('SET_CUR_TOPIC', data.data);
			}			
		} catch (err){
			console.error(err);
		}	
	},

	async REPLY_UP({ commit }, {replyId, accesstoken}){
		try{
			let res = await api.replyUp(replyId, accesstoken),
					data = res.data;
			if(data.success){
				return data.action;
			}			
		} catch (err){
			console.error(err);
		}	
	},

	async REPLY({ dispatch, commit }, {topicId, accesstoken, content, replyId}){
		try{
			let res = await api.reply(topicId, accesstoken, content, replyId),
					data = res.data;
			if(data.success){
				return dispatch('FETCH_TOPIC_DETAIL', topicId);
			}			
		} catch (err){
			console.error(err);
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
		state.curTab = tab;
	},

	SET_USER(state, user){
		state.user = user;
	},

	SET_ACCESS_TOKEN(state, accesstoken){
		state.accesstoken = accesstoken;
		localStorage.setItem('accesstoken', accesstoken);
	},

	SET_CUR_TOPIC(state, topic){
		state.curTopic = topic;
	}
}

const getters = {
	topicList: state => state.topicList
}

function getTabString(string){
	switch(string){
		case 'ask':
			return '问题';
		case 'share':
			return '分享';
		case 'job':
			return '工作';
		case 'goods':
			return '精华';
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
