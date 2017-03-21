<template>
	<div class="g-page">
		<div class="m-nav">
			<a href="javascript:;" class="itm z-active">全部</a>
			<a href="javascript:;" class="itm">精华</a>
			<a href="javascript:;" class="itm">分享</a>
			<a href="javascript:;" class="itm">问答</a>
			<a href="javascript:;" class="itm">招聘</a>
<!-- 			<router-link to="" class="itm z-active">全部</router-link>
			<router-link to="" class="itm">精华</router-link>
			<router-link to="" class="itm">分享</router-link>
			<router-link to="" class="itm">问答</router-link>
			<router-link to="" class="itm">招聘</router-link> -->
		</div>
		<topic-list></topic-list>
	</div>
</template>

<script>
	import topicList from '../components/topicList.vue'

	export default{
		components: {
			'topic-list': topicList
		},
	}
</script>

<style lang="scss">
$borderColorGray: #e1e1e1;

html{
	font-size: calc(100vw / 3.75);
}
body{
	font-size: 10%;
}

.g-page{
	
}	
.m-nav{
	display: flex;
	flex-flow: row nowrap;
	color:#333;
	.itm{
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		flex: 1 1 0;
		line-height: 45px;
		text-decoration: none;
		color: #333;
	}
	.itm.z-active{
		border-bottom: 3px solid #80bd01;
	}
}
.topic-list{
	margin: 0;
	padding-left: 0;
	background-color: #eee;
	list-style:none;
	.topic-itm{
		position: relative;
		height:138px;
		margin-bottom:15px;
		border: 1px solid $borderColorGray;
		border-width: 1px 0; 
		background-color: #fff;
		.topic-info{
			display: table;
			margin: 13px 0;
			padding-left: 15px;
			.avatar, .info{
				display: table-cell;
				vertical-align: middle;
			}
			.avatar{
				display: inline-block;
				width: 32px;
				height: 32px;
				margin-right: 5px;
				border-radius: 50%;
				border: 1px solid #eee;
			}
			.info{
				font-size: 16px;
				line-height: 20px;
				.nick-name,.time-info{
					display: block;
				}
				.nick-name{
					color: #080808;
				}
				.time-info{
					font-size:12px;
					.time{
						color: #ccc;
					}
					.tag{
						color: #80bd01;
					}
				}
			}
		}
		.topic-tit{
			margin: 13px 15px 0 15px;
			padding-bottom: 15px;
			font-size: 16px;
			color: #222;
			font-weight: 800;
			border-bottom: 1px solid $borderColorGray
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
			.attention,.comment{
				border-right: 1px solid $borderColorGray;
			}
		}
		.topic-sign{
			position: absolute;
			top: 15px;
			right:5px;
			.sign{
				display: inline-block;
				transform: rotate(35deg);			
				.iconfont{
					font-size: 0.3rem;
				}
			}
			.icon-zhiding{
				color: rgb(255,0,0);
			}
			.icon-jinghua{
				color: rgb(0,128,0);
			}
		}
	}
}
</style>