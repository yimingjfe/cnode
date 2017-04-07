<template>
	<div class="g-page m-collect-topics">
		<page-header des="收藏主题" show-back="true"></page-header>	
		<div class="g-main">
			<ul class="topic-list">
				<topic-item v-for="(topic, index) in topicList" key="index" :topic="topic"></topic-item>
				<a href="javascript:;" class="u-btn corner toTop" v-if="showToTop" @click="toTop">
					<i class="iconfont icon-top"></i>
				</a>
			</ul>			
		</div>
	</div>
</template>

<script>
import TopicItem from '../components/topicItem.vue'
import PageHeader from '../components/PageHeader.vue'
import _ from 'lodash'

export default{
	components:{
		'page-header': PageHeader,
		'topic-item': TopicItem
	},

	data(){
		return{
			showToTop: false
		}
	},

	computed:{
		topicList(){
			return this.$store.state.myCollectTopics;
		}
	},

	created(){
		let user = this.$store.state.user;
		this.$store.dispatch('FETCH_TOPIC_COLLECT', user.loginname);
	},

	mounted(){
		this.$el.addEventListener('scroll', _.debounce(this.scrollHandler, 200))
	},

	methods:{
		scrollHandler(){
			let offsetHeight = this.$el.offsetHeight,
					scrollTop = this.$el.scrollTop;	
			
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

<style lang="scss">
	.m-collect-topics{
		.topic-list{
			margin-top: 0;
			height: calc(100% - 46px);
		}
	}
</style>