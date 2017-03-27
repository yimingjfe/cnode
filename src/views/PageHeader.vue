<template>
	<div class="m-header">
		<div class="u-back" v-if="showBack"><</div>
		{{ des }}
	</div>
</template>

<script>
	export default{
		props: ['des', 'show-back']
	}
</script>

<style lang="scss">
	.m-header{
		position: absolute;
		width: 100%;		
		line-height: 45px;
		text-align: center;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
		color: #222;
	}
	.u-back{
		position: absolute;
		top: 0;
		left: 20px;
	}
</style>