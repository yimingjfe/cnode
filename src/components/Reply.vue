<template>
	<li class="reply-itm">
		<div class="reply-header">
			<span class="avatar"><img :src="reply.author.avatar_url" alt="" width="20" height="20"></span>
			<span class="username">{{reply.author.loginname}}</span>
			<span class="reply-time">{{reply.create_at | formatTime}}</span>							
		</div>
		<div class="reply-content" v-html="reply.content"></div>
		<span class="like" @click="handleLike" :class="{'z-active': up}">
			<i class="iconfont icon-dianzan"></i>
			<span class="like-count">{{ ups }}</span>
		</span>
	</li>	
</template>

<script>
  import util from '../util' 
  import { mapActions } from 'vuex'

	export default{
		props:['reply'],

		data(){
			return{
				up: false
			}
		},

		computed:{
			ups(){
				return parseInt(this.reply.ups.length + Number(this.up));
			}
		},

		filters:{
			formatTime(value){
				return util.formatDuration(value);
			}
		},

		methods:{
			...mapActions({
				replyUp: 'REPLY_UP'
				}),

			handleLike(){
				let user = this.$store.state.user,
						accesstoken = this.$store.state.accesstoken;
				if(!user || !user.id){
					this.$router.push({path: './login', query:{redirect: '/topic'}});
				} else {
					this.replyUp({replyId: this.reply.id, accesstoken}).then( action => {
						this.up = action == 'up' ? true : false;
					});
				}
			}			
		}
		
	}
</script>

<style lang="scss">
$borderColorGray: #e1e1e1;

.reply-itm{
	position: relative;
	border: 1px solid $borderColorGray;
	border-radius: 3px;
	margin: 5px 0;
	overflow: hidden;
	word-break: break-all;
	.reply-header{
		display: table;
		.avatar,.username,.reply-time{
			display: table-cell;
			vertical-align: middle;
			padding-left: 10px;
		}
	}
	.reply-content{
		margin: 0 10px;
	}
	.like{
		position: absolute;
		top: 10px;
		right: 10px;
		.like-count{
			padding-left: 3px;
			font-size: 14px;
			vertical-align: middle;
		}
	}
	.like.z-active{
		color: red;
	}
}	
</style>