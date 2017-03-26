<template>
	<div class="g-homepage">
		<div class="m-nav">
			<router-link to="/homepage/all" class="itm" active-class="z-active">全部</router-link>
			<router-link to="/homepage/good" class="itm" active-class="z-active">精华</router-link>
			<router-link to="/homepage/share" class="itm" active-class="z-active">分享</router-link>
			<router-link to="/homepage/ask" class="itm" active-class="z-active">问答</router-link>
			<router-link to="/homepage/job" class="itm" active-class="z-active">招聘</router-link>
		</div>
		<transition :name="transition">
			<router-view></router-view>
		</transition>
	</div>
</template>	

<script>
	export default{
		data(){
			return {
				transition: 'fade',
				routers:{
					'all' : 1,
					'good' : 2,
					'share' : 3,
					'ask' : 4,
					'job' : 5
				}
			}
		},

		watch:{
			'$route' (to, from){
				let toPath = to.path.slice(10),
						fromPath = from.path.slice(10);
				this.transition = this.routers[toPath] < this.routers[fromPath]
													? 'slider-right'
													: 'slider-left';
			}
		}		
	} 
</script>