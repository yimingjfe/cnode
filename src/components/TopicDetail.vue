<template>
	<div class="topic-detail">
		<page-header des="主题" show-back="true"></page-header>
		<div class="topic-main">
			<div class="topic-info">
				<span class="avatar"><img :src= "topic.author.avatar_url" alt="" width="32" height="32"></span>
				<span class="info">
					<span class="nick-name">{{topic.author.loginname}}</span>
					<span class="time-info">
						<span class="time">{{topic.createTime}}</span>
					</span>	
				</span>
			</div>	
			<div class="topic-title">
				<h1 class="title">{{topic.title}}</h1>				
				<div class="topic-footer">
					<span class="attention"><i class="iconfont icon-yanjing"></i>{{topic.visit_count}}</span>
					<span class="comment"><i class="iconfont icon-pinglun"></i>{{topic.reply_count}}</span>
				</div>				
			</div>
			<div class="topic-sign">
				<span class="sign" v-if="topic.good"><i class="iconfont icon-jinghua"></i></span>
				<span class="sign" v-if="topic.top"><i class="iconfont icon-zhiding"></i></span>
			</div>			
			<div class="topic-content" v-html="topic.content"></div>
			<div class="m-reply-box" v-if="topic.replies.length > 0">
				<div class="reply-count">共{{topic.replies.length}}回复</div>
				<ul class="reply-main">
					<reply v-for="(reply, index) in topic.replies" key="index" :reply="reply"></reply>
				</ul>
			</div>
			<new-reply></new-reply>
		</div>	
	</div>	
</template>

<script>
  import PageHeader from '../views/PageHeader.vue'
  import Reply from './Reply.vue'
  import NewReply from './NewReply.vue'

	export default{
    components:{
      'page-header': PageHeader,
      'reply': Reply,
      'new-reply': NewReply  
    },	

		computed:{
			topic(){
				return this.$store.state.curTopic;
			} 
		}
	}
</script>

<style lang="scss">
$borderColorGray: #e1e1e1;

	.topic-detail{
		position: relative;
		overflow: hidden;
		height: 100vh;
	}
	.topic-main{
		position: absolute;
		top: 45px;
		width: 100%;
		height: calc(100vh - 45px);
		box-sizing: border-box;
		padding: 0 5px;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling : touch; 		
	}
	.topic-title{
		position: relative;
		margin: 10px 0;
		text-align: center;
		.title{
			margin: 0;
			line-height: 1.5;
		}
		.topic-footer{
			display: flex;
			flex-flow: row, nowrap;
			justify-content: middle;
			line-height: 18px;
			padding: 10px 0;
			.attention,.comment,.time{
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				flex: 1 1 0;
				color: #aaa;
				.iconfont{
					padding: 1px 2px;
				}
			}
			.attention{
				border-right: 1px solid $borderColorGray;
			}
		}		
	}
	.topic-detail img{
		max-width: 100%;
	}
	.markdown-text{
		font-size: 14px;
		line-height: 1.5;
		ul,ol,p{
			max-width: 100%;
			white-space: pre-wrap;
		}
		blockquote{
			margin: 0;
			line-height:1.5;
			border-left: 5px solid #eee;
			&>p{
				margin-left: 15px;
			}
		}
		hr{
			height: 4px;
			background-color: #e7e7e7;
			border: 0;
		}
		a{
			color: #4078c0;
			text-decoration: none;
		}
	}

	.m-reply-box{
		.reply-count{
			padding-left: 10px;
			border-radius: 3px;
			line-height: 36px;
			background-color: #f6f6f6;
		}
		.reply-main{
			margin: 0;
			padding:0;
		}
	}
</style>