import axios from 'axios'
import * as urls from './urls.js'

export function getTopics(page, limit, tab){
	return axios.get(urls.TOPIC_LIST,{
		params:{
			page,
			limit,
			tab
		}
	});
}
export function login(accesstoken){
	return axios.post(urls.LOGIN,{
		accesstoken
	});
}
export function fetchTopicDetail(id){
	return axios.get(urls.TOPIC + '/' +id);
}

export function replyUp(replyId, accesstoken){
	return axios.post(urls.BASE_URL + '/reply/' + replyId + '/ups',{
		accesstoken
	})
}

export function reply(topicId, accesstoken, content, replyId){
	return axios.post(urls.TOPIC + '/' + topicId + '/replies',{
		accesstoken,
		content,
		reply_id: replyId
	})
}

export function collect(accesstoken, topicId ){
	return axios.post(urls.COLLECT, {
		accesstoken,
		topic_id: topicId
	})
}

export function deCollect(accesstoken, topicId ){
	return axios.post(urls.DE_COLLECT, {
		accesstoken,
		topic_id: topicId
	})
}

