<template>
	<main class="home">
		<div class="home__content">
			<img src="../assets/logo_banner_light.svg"
				alt="logo_banner"
				v-if="isDarkMode"/>
			<img src="../assets/logo_banner.svg" 
				alt="logo_banner" 
				v-else/>
			<h1 class="title is-1">
				Full Stack Developer
			</h1>
			<div class="buttons">
				<router-link :to="{ name: 'about' }" class="button is-primary">About me</router-link>
				<router-link :to="{ name: 'contact' }"
					class="button is-primary is-outlined"
					>Get in touch</router-link>
			</div>
		</div>
	</main>
</template>

<script>
	import { mapState } from 'vuex';
	import Page from '../components/Page';

	export default {
		extends: Page,
		computed: {
			...mapState({
				isDarkMode: state => state.preferences.isDarkMode
			})
		}
	};
</script>

<style lang="scss">
	@import '../scss/utilities/all';

	.home {
		min-height: calc(100vh - 56px - 40px);
		display: flex;
		justify-content: center;
		flex-direction: column;

		@include mobile() {
			padding: 64px 32px !important;
			min-height: calc(100vh - 100vw - 40px);
		}
	}
</style>
