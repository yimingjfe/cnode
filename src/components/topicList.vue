<template>
	<ul class="topic-list">
		<topic-item v-for="(topic, index) in topicList" :key="index" :topic="topic"></topic-item>
		<a href="javascript:;" class="u-btn corner toTop" v-if="showToTop" @click="toTop">
			<i class="iconfont icon-top"></i>
		</a>
	</ul>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import TopicItem from './topicItem.vue'
import _ from 'lodash'

export default{
	props: ['type'],
	data(){
		return{
			page: 1,
			limit: 10,
			height: 0,
			showToTop: false
		}
	},

	components:{
		'topic-item': TopicItem
	},

	computed:{
		topicList(){
			return this.$store.state.topicList;
		}
	},	

	created(){
		this.FETCH_TOPIC_LIST({
			page: this.page,
			limit: this.limit,
			tab: this.type
		});
		window.addEventListener('popState', e => {
			console.log(this.$store.state.positionStore[e.state]);
		});		
	},

	mounted(){
		this.$el.addEventListener('scroll', _.debounce(this.scrollHandler, 200))
	},

	updated(){
		this.$el.scrollBottom = this.$el.ScrollHeight - this.height;
	},

	watch:{
		$route(){
			console.log('fdf');
		}
	},


	beforeDestory(){
		window.removeEventListener('popState');
	},  

	methods:{
		...mapActions([
			'FETCH_TOPIC_LIST'
			]),

		scrollHandler(){
			let height = this.height = this.$el.scrollHeight,
					offsetHeight = this.$el.offsetHeight,
					scrollTop = this.$el.scrollTop;
			if(offsetHeight + scrollTop > height - 200){
				this.FETCH_TOPIC_LIST({
					page: ++this.page,
					limit: this.limit,
					tab: this.type				
				})
			}
			this.showToTop = scrollTop > offsetHeight ? true : false;
		},

		toTop(){
			let scrollTop = this.$el.scrollTop;
			if(scrollTop > 0){
				this.$el.scrollTop = scrollTop - 50;
				requestAnimationFrame(this.toTop);
			}		
		}
	}
}

</script>