<template>
	<div class="g-page">
		<page-header></page-header>
		<div class="avatar-wrap">
			<div class="avatar">
				<img :src="imgSrc" alt="" width="80" height="80">
			</div>
		</div>	
	</div>
</template>

<script>
	import PageHeader from '../views/PageHeader.vue'

	export default{
		components: {
			'page-header': PageHeader
		},
		computed:{
			imgSrc(){
				return this.$store.state.user.avatar_url;
			}
		}
	}	
</script>

<style lang="scss">
	.avatar-wrap{
		position: relative;
		width: 100%;
		height: 26vh;
		box-sizing: border-box;
		background-image: url(../assets/background2.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		/*background-color: #FFCC33;*/
		.avatar{
			position: absolute;
			left: calc(50% - 40px);
			bottom: -40px;
			overflow: hidden;
			border-radius: 50%;			
		}
	}
</style>