<template>
	<div class="m-new-reply">
		<h2 class="reply-title">回复</h2>
		<textarea class="new-reply" cols="30" rows="10" v-model="content"></textarea>
		<a href="javascript:;" class="u-btn z-green reply-btn" @click="sendReply">回复</a>
	</div>
</template>

<script>
import {mapState} from 'vuex'

export default{
	props:['reply'],

	data(){
		return{
			content: ''
		}
	},

	computed:{
		...mapState({
			accesstoken: state => state.accesstoken,
			topicId:state => state.curTopic.id
			})
	},

	methods:{
		sendReply(){
			this.$store.dispatch('REPLY',{
				topicId: this.topicId,
				accesstoken: this.accesstoken,
				content: this.content,
				replyId: this.reply && this.reply.id
			});
			this.content = '';
		}
	}
}	
</script>

<style lang="scss">	
	.m-new-reply{
		.reply-title{
				padding-left: 10px;
				border-radius: 3px;
				line-height: 36px;
				background-color: #f6f6f6;
		}
		.new-reply{
			width: 100%;
			box-sizing: border-box;
		}
		.u-btn.reply-btn{
			display: block;
			margin: 10px 50px;
			max-width: 250px;
		}
	}
</style>