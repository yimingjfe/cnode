<template>
	<ul class="topic-list">
		<topic-item v-for="(topic, index) in topicList" key="index" :topic="topic"></topic-item>
	</ul>
</template>

<script>

import 'babel-polyfill'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import TopicItem from './topicItem.vue'
import _ from 'lodash'

export default{
	props: ['type'],
	data(){
		return{
			page: 1,
			limit: 10,
			height: 0
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

	// beforeRouteEnter(to, from, next){
	// 	this.FETCH_TOPIC_LIST({
	// 		page: this.page,
	// 		limit: this.limit,
	// 		tab: this.type
	// 	});		
	// },

	computed:{
		topicList(){
			return this.$store.state.topicList.map(item => {
				item.tabString = this.getTabString(item.tab);
				return item;
			})
		}
	},

	mounted(){
		this.$el.addEventListener('scroll', _.debounce(this.scrollHandler, 200))
	},

	updated(){
		this.$el.scrollBottom = this.$el.ScrollHeight - this.height;
	},

	methods:{
		...mapActions([
			'FETCH_TOPIC_LIST'
			]),

		scrollHandler(){
			let height = this.height = this.$el.scrollHeight;
			if(this.$el.offsetHeight + this.$el.scrollTop > height - 100){
				this.FETCH_TOPIC_LIST({
					page: ++this.page,
					limit: this.limit,
					tab: this.type				
				})
			}
		},

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