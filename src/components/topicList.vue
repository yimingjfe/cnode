<template>
	<ul class="topic-list">
		<topic-item v-for="(topic, index) in topicList" key="index" :topic="topic"></topic-item>
	</ul>
</template>

<script>

import 'babel-polyfill'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import TopicItem from './topicItem.vue'

export default{
	props: ['type'],
	data(){
		return{
			page: 1,
			limit: 10
		}
	},

	components:{
		'topic-item': TopicItem
	},

	created(){
		this.FETCH_TOPIC_LIST({
			page: this.page,
			limit: this.limit,
			tab: this.type
		});
	},

	computed:{
		topicList(){
			return this.$store.state.topicList.map(item => {
				item.tabString = this.getTabString(item.tab);
				return item;
			})
		}
	},
	methods:{
		...mapActions([
			'FETCH_TOPIC_LIST'
			]),
		getTabString(string){
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
	}
}

</script>