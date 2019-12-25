<script>
	import { mapMutations } from 'vuex';

	export default {
		props: {
			isFullPage: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				test: ''
			};
		},
		mounted() {
			this.toggleFullPage(this.isFullPage);
		},
		methods: {
			...mapMutations(['toggleFullPage'])
		}
	};
</script>
