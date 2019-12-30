<script>
	import { mapMutations } from 'vuex';

	export default {
		props: {
			isFullPage: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.toggleFullPage(this.isFullPage);
		},
		methods: {
			...mapMutations(['toggleFullPage'])
		}
	};
</script>
