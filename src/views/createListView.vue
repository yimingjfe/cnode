<script>
	import TopicList from '../components/TopicList.vue'

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