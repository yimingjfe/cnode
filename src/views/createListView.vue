<script>
	import topicList from '../components/topicList.vue'

	export function createListView(type){
		return {
			name: `${type}-topic-list`,
			render(h){
				return h(topicList, {props: {type}})
			}
		}
	}
</script>