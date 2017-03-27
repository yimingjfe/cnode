<template>
	<router-view></router-view>
</template>

<script>


</script>

<style lang="scss">
$borderColorGray: #e1e1e1;


html{
	font-size: calc(100vw / 3.75);
}
body{
	font-size: 10%;
}

.fade-leave-active, .fade-enter{
	opacity: 0;
}
.slider-left-enter, .slider-right-leave-active{
	opacity: 0;
	transform: translateX(50%);	
}
.slider-left-leave-active,.slider-right-enter{
	opacity: 0;
	transform: translateX(-50%);
}

.g-page{
	position: relative;
	overflow: hidden;
	height: 100vh;
}	
.m-nav{
	display: flex;
	position: absolute;
	width: 100%;
	flex-flow: row nowrap;
	color:#333;
	background-color: #fff;
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
.m-nav-bottom{
	@extend .m-nav;
	position: absolute;
	left: 0;
	bottom: 0;
	padding: 5px 0;
	border-top: 1px solid $borderColorGray;
	.itm{
		flex-flow: column nowrap;
		align-items: center;
		line-height: 1.4;
		font-size: 12px;
		.iconfont{
			font-size: 18px;
		}
	}
	.itm.z-active{
		color: #80bd01;
		border: none;
	}
}

.topic-list{
	position: absolute;
	margin: 48px 0 0 0;
	height: calc(100% - 96px);
	padding-left: 0;
	overflow-y: auto;
	background-color: #eee;
	list-style:none;
	transition: all .3s ease;
	.topic-itm{
		position: relative;
		margin-bottom:15px;
		border: 1px solid $borderColorGray;
		border-width: 1px 0; 
		background-color: #fff;
		cursor: pointer;
		.topic-info{
			display: table;
			margin-top: 10px;
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
				overflow: hidden;
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
			padding: 5px 0;
			margin-left: 15px;
			font-size: 16px;
			line-height: 24px;
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
.u-btn{
	display: inline-block;
	box-sizing: border-box;
	text-align: center;
	line-height: 38px;
	text-decoration: none;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	color: white;
}
.u-btn.z-green{
	background-color: #76ae01;
}
</style>