<template>
	<div class="m-header">{{ des }}</div>
</template>

<script>
	export default{
		props: ['des']
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
</style>