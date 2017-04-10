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
			showToTop: false,
			debouncedScroll: _.debounce(this.scrollHandler, 200)
		}
	},

	components:{
		'topic-item': TopicItem
	},

	computed:{
		topicList(){
			return this.$store.state.topicList;
		},
		tab(){
			return this.$store.state.curTab;
		}
	},	

	created(){
		if(this.type !== this.tab){
			this.FETCH_TOPIC_LIST({
				page: this.page,
				limit: this.limit,
				tab: this.type
			});	
		}
	},

	mounted(){
		window.addEventListener('scroll', this.debouncedScroll)
	},

	updated(){
		document.body.scrollBottom = document.body.ScrollHeight - this.height;
	},

	destroyed(){
		window.removeEventListener('scroll', this.debouncedScroll);
	},

	watch:{
		$route(){
		}
	},


	methods:{
		...mapActions([
			'FETCH_TOPIC_LIST'
			]),

		scrollHandler(){
			let height = this.height = document.body.scrollHeight,
					offsetHeight = document.body.offsetHeight,
					scrollTop = document.body.scrollTop;
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
			let scrollTop = document.body.scrollTop;
			if(scrollTop > 0){
				document.body.scrollTop = scrollTop - 50;
				requestAnimationFrame(this.toTop);
			}		
		}
	}
}

</script>