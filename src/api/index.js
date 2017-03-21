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