<template>
	<div class="g-page">
		<router-view></router-view>
		<div class="m-nav-bottom">
			<router-link to="/homepage" class="itm" active-class="z-active">
				<i class="iconfont icon-shouye"></i><span class="des">首页</span>
			</router-link>
			<a href="javascript:;" class="itm"><i class="iconfont icon-fabiao"></i><span class="des">发表</span></a>
			<a href="javascript:;" class="itm"><i class="iconfont icon-xiaoxi"></i><span class="des">消息</span></a>
			<router-link to="/mine" class="itm" active-class="z-active">
				<i class="iconfont icon-wode"></i><span class="des">我的</span>
			</router-link>					
		</div>
	</div>
</template>