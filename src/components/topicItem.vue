<template>
	<li class="topic-itm" >
		<div class="topic-info">
			<span class="avatar"><img :src= "topic.author.avatar_url" alt="" width="32" height="32"></span>
			<span class="info">
				<span class="nick-name">{{topic.author.loginname}}</span>
				<span class="time-info">
					<span class="time">{{topic.createTime}}</span>
					<span class="tag">#{{topic.tabString}}#</span>
				</span>	
			</span>
		</div>
		<div class="topic-tit">{{topic.title}}</div>
		<div class="topic-footer">
			<span class="attention"><i class="iconfont icon-yanjing"></i>{{topic.visit_count}}</span>
			<span class="comment"><i class="iconfont icon-pinglun"></i>{{topic.reply_count}}</span>
			<span class="time">{{topic.lastReplyTime}}</span>
		</div>
		<div class="topic-sign">
			<span class="sign" v-if="topic.top"><i class="iconfont icon-jinghua"></i></span>
			<span class="sign" v-if="topic.good"><i class="iconfont icon-zhiding"></i></span>
		</div>
	</li>	
</template>

<script>
	export default{
		props: ['topic']
	}
</script>