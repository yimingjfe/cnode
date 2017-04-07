<template>
	<div class="g-homepage">
		<div class="m-nav m-nav-top">
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
				},
				touchStartEvent: null,
				touchEndEvent: null
			}
		},


		mounted(){

			this.$el.addEventListener('touchstart', e => {
				this.touchStartEvent = e;
			});
			this.$el.addEventListener('touchend', e => {
				this.touchEndEvent = e;
			});			
		},

		computed:{
			routersArray(){
				let array = [];
				for(let key of Object.keys(this.routers)){
					array.push(key)
				}
				return array;
			}
		},

		watch:{
			'$route' (to, from){
				let toPath = to.path.slice(10),
						fromPath = from.path.slice(10);
				this.transition = this.routers[toPath] < this.routers[fromPath]
													? 'slider-right'
													: 'slider-left';
			},

			touchEndEvent(to, from){
				const touchStartEvent = this.touchStartEvent,
							touchEndEvent = this.touchEndEvent;

				if(touchStartEvent.changedTouches[0].clientX 
						- touchEndEvent.changedTouches[0].clientX > 50){

					const to = this.$route.path.slice(10);
					const toPath = this.routersArray[this.routers[to]];
					if(toPath) this.$router.push('/homepage/' + toPath);
					
				} else if(touchStartEvent.changedTouches[0].clientX 
						- touchEndEvent.changedTouches[0].clientX < -50){

					const to = this.$route.path.slice(10);
					const toPath = this.routersArray[this.routers[to] - 2];
					if(toPath) this.$router.push('/homepage/' + toPath);
				}
			}
		}		
	} 
</script>