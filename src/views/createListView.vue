<script>
	import topicList from '../components/topicList.vue'

	export function createListView(type){
		return {
			type: `${type}-topic-list`,
			render: h(topicList, {props: {type}})
		}
	}
</script>