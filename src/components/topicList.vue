<template>
	<ul class="topic-list">
		<topic-item v-for="(topic, index) in topicList" key="index" :topic="topic"></topic-item>
	</ul>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import TopicItem from './topicItem.vue'

export default{
	components:{
		'topic-item': TopicItem
	},
	computed:{
		topicList(){
			return this.$store.state.topicList.map(item => {
				item.tabString = this.getShareString(item.tab);
				return item;
			})
		}
	},
	methods:{
		getShareString(string){
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