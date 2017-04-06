<script>
	import TopicList from '../components/topicList.vue'

	export function createListView(type){
		return {
			name: `${type}-topic-list`,
			render(h){
				console.log(TopicList);
				return h(TopicList, { props: { type }})
			} 
		}
	}
</script>