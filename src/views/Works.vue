<template>
	<section class="works content">
		<h1 class="title is-1">
			Works &amp; Creations
		</h1>
		<Anchorheader anchor="projects">
			Projects
		</Anchorheader>
		<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam</p>
	</section>
</template>

<script>
	import Anchorheader from '../components/AnchorHeader';
	import Page from '../components/Page';

	export default {
        extends: Page,
		components:{
			Anchorheader
		}
	}
</script>

<style lang="scss">

</style>