<template>
	<div class="topic-detail">
		<page-header des="主题" show-back="true"></page-header>
		<div class="topic-content" v-html="topic.content"></div>
	</div>	
</template>

<script>
  import PageHeader from '../views/PageHeader.vue' 
	export default{
     components:{
       'page-header': PageHeader
     },		
		computed:{
			topic(){
				return this.$store.state.curTopic;
			} 
		}
	}
</script>

<style lang="scss">
	.topic-detail{
		position: relative;
		overflow: hidden;
		height: 100vh;
	}
	.topic-content{
		position: absolute;
		top: 45px;
		width: 100%;
		height: calc(100vh - 45px);
		box-sizing: border-box;
		padding: 0 5px;
		overflow-y: auto;
		-webkit-overflow-scrolling : touch; 
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
		ul,ol{

		}
	}
</style>