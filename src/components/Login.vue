<template>
	<div class="m-login">
		<page-header des="登录"></page-header>
		<div class="g-main">
			<div class="input-wrap">
				<input type="text" class="input-text" v-model="accesstoken" placeholder="请输入accesstoken">
			</div>
			<button class="u-btn z-green" @click="login">登录</button>
		</div>	
	</div>	
</template>

<script>
	import PageHeader from '../views/PageHeader.vue'

	export default{
		components: {
			'page-header': PageHeader
		},

		data(){
			return{
				accesstoken: ''
			}			
		},

		methods:{
			login(){
				this.$store.dispatch('LOGIN', this.accesstoken)
					.then( ()=> {
						let user = this.$store.state.user,
								fullPath = this.$route.query.redirect;
						if(user.id){
							this.$router.push({path: fullPath});
						}
					});
			}
		}		
	}
</script>
<style lang="scss">
	.m-login .g-main{
		top: 50%;
		padding: 0 30px;
		margin-top: 0;
		transform: translateY(-50%);
		.u-btn{
			width: 100%;
			margin-top: 20px;
		}		
	}
	.input-text{	
		width: 100%;
		box-sizing: border-box;
		padding-left: 20px;
		border-radius: 3px;
		border: 1px solid #ddd;		
		line-height: 38px;		
	}
</style>