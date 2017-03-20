<template>
	<div class="g-page">
		<div class="m-nav">
			<a href="javascript:;" class="itm z-active">全部</a>
			<a href="javascript:;" class="itm">全部</a>
			<a href="javascript:;" class="itm">全部</a>
			<a href="javascript:;" class="itm">全部</a>
			<a href="javascript:;" class="itm">全部</a>
		</div>
		<ul class="topic-list">
			<li class="topic-itm">
				<div class="topic-info">
					<span class="avatar"><img src="" alt=""></span>
					<span class="info">
						<span class="user-name">hfafj</span>
						<span class="tag">分享</span>
					</span>
				</div>
				<div class="topic-tit">前端教程</div>
				<div class="topic-footer">
					<span class="attention"><i class="iconfont icon-yanjing"></i>10254</span>
					<span class="comment"><i class="iconfont icon-pinggun"></i>56</span>
					<span class="time">1天前</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss">

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
	display: flex;
}
</style>