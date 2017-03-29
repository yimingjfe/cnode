<template>
	<div class="g-mine">
		<page-header des="个人中心"></page-header>
		<div class="g-main">
			<div class="avatar-wrap">
				<div class="avatar">
					<img :src="imgSrc" alt="" width="100" height="100">
				</div>
			</div>
			<ul class="user-content">
					<router-link to="/collect-topics" class="link">
						<i class="iconfont icon-yishoucang"></i>
						<span class="des">收藏主题</span>
						<i class="iconfont icon-youjiantou"></i>
					</router-link>
			</ul>				
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
	.g-mine{
		width:100%;
		height: 100%;
		.avatar-wrap{
			position: relative;
			width: 100%;
			height: 26vh;
			box-sizing: border-box;
			background-image: url(../assets/background2.jpg);
			background-repeat: no-repeat;
			background-size: cover;
			.avatar{
				position: absolute;
				left: calc(50% - 50px);
				bottom: -50px;
				overflow: hidden;
				border-radius: 50%;			
			}
		}
		.user-content{
			padding: 0;
			margin-top: 100px;
			font-size: 14px;
			list-style: none;
			&>.link{
				position: relative;
				display: table;
				width: 100%;
				padding-left: 10px;
				line-height: 48px;
				color: #333;
				text-decoration: none;
				border: 1px solid #ddd;
				border-color: #ddd transparent;
				.iconfont{
					display: inline-block;
					font-size: 24px;	
					vertical-align: middle;				
				}
				.icon-yishoucang{
					color: #f8c63e;
				}
				.icon-youjiantou{
					position: absolute;
					top: calc(50% - 24px);
					right: 15px;
					color: #ddd;
				}
				.des{
					display: inline-block;
					vertical-align: middle;
					padding-left: 14px;
				}				
			}
		}
	}

</style>