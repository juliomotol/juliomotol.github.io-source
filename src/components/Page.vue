<script>
	export default {
		data() {
			return {
				backgroundImage: null,
				isFullPage: false
			};
		},
		watch: {
			backgroundImage(newVal) {
				this.$emit('setBackground', newVal);
			},
			isFullPage(newVal) {
				this.$emit('toggleFullPage', newVal);
			}
		},
		mounted() {
			this.$emit('setBackground', this.backgroundImage);
			this.$emit('toggleFullPage', this.isFullPage);
		}
	};
</script>
