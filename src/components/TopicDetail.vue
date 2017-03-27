<template>
	<div class="topic-detail">
		<page-header des="主题"></page-header>
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
		height: 100%;
		overflow-y: auto;
	}
</style>